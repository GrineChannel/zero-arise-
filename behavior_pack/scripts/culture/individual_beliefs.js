import {createValues} from "./values.js";
export function createIndividualOutlook(overrides={}){return {values:createValues(overrides.values),affiliations:[...new Set((overrides.affiliations||[]).map(String))].slice(0,16)};}
export function reconsiderOutlook(outlook,socialValues,openness=0.05){
 const values=createValues(outlook.values),society=createValues(socialValues);
 const rate=Math.max(0,Math.min(0.2,Number(openness)||0));
 for(const k of Object.keys(values))values[k]=Math.max(0,Math.min(100,values[k]+(society[k]-values[k])*rate));
 return {...outlook,values};
}
