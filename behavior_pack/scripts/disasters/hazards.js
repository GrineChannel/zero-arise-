export const HAZARD_TYPES=Object.freeze(["fire","siege","flood","earthquake","drought","mana_anomaly"]);
export function createHazard(id,type,{severity=30,x=0,z=0,radius=8,day=0}={}){
 if(!HAZARD_TYPES.includes(type)||typeof id!=="string"||!id)return null;
 return {id,type,severity:Math.max(0,Math.min(100,Number(severity)||0)),x:Number(x)||0,z:Number(z)||0,radius:Math.max(1,Math.min(128,Number(radius)||8)),day:Math.max(0,Number(day)||0),active:true};
}
export function exposure(hazard,position){
 const dx=(Number(position.x)||0)-hazard.x,dz=(Number(position.z)||0)-hazard.z;
 const distance=Math.hypot(dx,dz);
 return Math.max(0,1-distance/hazard.radius)*hazard.severity;
}
