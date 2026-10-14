import { EventDetail } from "@/components/event-detail";export default async function Page({params}:{params:Promise<{id:string;slug:string}>}){const p=await params;return <EventDetail {...p}/>}
