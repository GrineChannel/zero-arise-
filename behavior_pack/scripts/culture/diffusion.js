import {createValues} from "./values.js";
export function exchangeCulturalValues(source,target,{contact=0.1,resistance=0.5}={}){
 const a=createValues(source),b=createValues(target);
 const rate=Math.max(0,Math.min(0.25,Number(contact)||0))*(1-Math.max(0,Math.min(1,Number(resistance)||0)));
 for(const k of Object.keys(b))b[k]=Math.max(0,Math.min(100,b[k]+(a[k]-b[k])*rate));
 return b;
}
