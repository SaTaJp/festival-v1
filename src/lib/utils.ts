import { Festival, FestivalCategory } from "./types";
export type Filters={year?:string;month?:string;location?:string;category?:string};
export function filterFestivals(items:Festival[], f:Filters){return items.filter(x=>{const d=new Date(x.startDate+"T00:00:00");const loc=`${x.prefecture} ${x.city}`.toLowerCase();return (!f.year||d.getFullYear()===Number(f.year))&&(!f.month||d.getMonth()+1===Number(f.month))&&(!f.category||x.category===f.category as FestivalCategory)&&(!f.location||loc.includes(f.location.toLowerCase()));});}
export function isPast(x:Festival, today=new Date()){return new Date((x.endDate||x.startDate)+"T23:59:59")<today;}
export function paginate<T>(items:T[],page=1,size=12){const total=Math.max(1,Math.ceil(items.length/size));const current=Math.min(Math.max(1,page),total);return {items:items.slice((current-1)*size,current*size),total,current};}
export function distanceKm(a:number,b:number,c:number,d:number){const r=6371, q=(n:number)=>n*Math.PI/180;const x=q(c-a),y=q(d-b);const h=Math.sin(x/2)**2+Math.cos(q(a))*Math.cos(q(c))*Math.sin(y/2)**2;return 2*r*Math.asin(Math.sqrt(h));}
