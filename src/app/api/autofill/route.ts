import { NextRequest, NextResponse } from "next/server";

const privateHost = (host:string) => host === "localhost" || host.endsWith(".local") || /^(127\.|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(host);
export async function POST(request:NextRequest) {
  const { url } = await request.json().catch(() => ({})) as {url?:string};
  let target:URL;
  try { target = new URL(url || ""); if (!/^https?:$/.test(target.protocol) || privateHost(target.hostname)) throw new Error(); } catch { return NextResponse.json({error:"Enter a public http(s) URL."},{status:400}); }
  if (!process.env.GEMINI_API_KEY) return NextResponse.json({error:"Autofill is not configured."},{status:503});
  try {
    const page = await fetch(target,{signal:AbortSignal.timeout(8000),redirect:"follow",headers:{Accept:"text/html"}});
    const type=page.headers.get("content-type")||""; if (!page.ok || !type.includes("text/html")) throw new Error();
    const html=(await page.text()).slice(0,180000); const title=html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]||""; const description=html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)/i)?.[1]||""; const text=html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>/gi," ").replace(/\s+/g," ").slice(0,12000);
    const prompt=`Extract only facts explicitly supported by this festival webpage. Unknown fields must be null. Never infer participation, reservation, language, accessibility, dates or prices. Return JSON only with nameJa,nameEn,startDate,endDate,prefecture,city,venue,address,description,imageUrl,activities (array of {type,interactionType,participationType,reservationRequired,price,startTime,endTime,location,conditions,description}). Page title: ${title}. Meta: ${description}. Text: ${text}`;
    const ai=await fetch("https://generativelanguage.googleapis.com/v1beta/interactions",{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-key":process.env.GEMINI_API_KEY},body:JSON.stringify({model:"gemini-3.5-flash-lite",input:prompt,store:false}),signal:AbortSignal.timeout(20000)});
    if(!ai.ok){console.error("autofill:gemini",{status:ai.status});return NextResponse.json({error:"AI extraction is temporarily unavailable."},{status:502});}
    const data=await ai.json() as {steps?:Array<{type?:string;content?:Array<{type?:string;text?:string}>}>};
    const raw=data.steps?.filter(s=>s.type==="model_output").flatMap(s=>s.content||[]).filter(c=>c.type==="text"&&typeof c.text==="string").map(c=>c.text).join("").replace(/^```json\s*|\s*```$/g,"").trim();
    if(!raw){console.error("autofill:gemini-response",{reason:"empty_model_output",steps:data.steps?.length||0});return NextResponse.json({error:"AI returned no extractable information."},{status:502});}
    try{return NextResponse.json({data:JSON.parse(raw),source:target.toString()});}catch{console.error("autofill:gemini-response",{reason:"invalid_json"});return NextResponse.json({error:"AI returned an invalid extraction."},{status:502});}
  } catch (error) { console.error("autofill:fetch",{kind:error instanceof Error?error.name:"unknown"});return NextResponse.json({error:"Could not retrieve festival information. Please enter it manually."},{status:502}); }
}
