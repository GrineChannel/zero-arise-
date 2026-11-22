import {unitStats} from "./unit_catalog.js";
export function combatPower(army,{terrain=1,weather=1,doctrine=1}={}){
 const base=Object.entries(army.units||{}).reduce((s,[type,n])=>s+(unitStats(type)?.attack||0)*Math.max(0,Number(n)||0),0);
 const morale=Math.max(0,Math.min(100,Number(army.morale)||0))/100;
 const experience=1+Math.max(0,Math.min(100,Number(army.experience)||0))/200;
 return base*(0.4+0.6*morale)*experience*Math.max(0.1,Math.min(2,terrain))*Math.max(0.1,Math.min(2,weather))*Math.max(0.1,Math.min(2,doctrine));
}
export function resolveBattle(a,b,contextA={},contextB={}){
 const pa=combatPower(a,contextA),pb=combatPower(b,contextB);
 if(pa===0&&pb===0)return {winner:null,lossRatioA:0,lossRatioB:0};
 const total=Math.max(1,pa+pb),ratioA=pa/total,ratioB=pb/total;
 return {winner:pa===pb?null:pa>pb?a.id:b.id,lossRatioA:Math.min(1,ratioB*0.65),lossRatioB:Math.min(1,ratioA*0.65)};
}
