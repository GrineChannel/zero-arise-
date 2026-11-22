// Abstract spread only; block changes require explicit safe materialization.
export function spreadHazard(hazard,{flammability=0,wind=0,humidity=0,magicalInstability=0}={},roll=0.5){
 if(!hazard?.active||!Number.isFinite(roll)||roll<0||roll>=1)return {...hazard};
 const modifier=hazard.type==="fire"?(flammability+wind-humidity)/200:hazard.type==="mana_anomaly"?magicalInstability/150:0;
 if(modifier<=0||roll>=Math.min(0.75,modifier))return {...hazard};
 return {...hazard,radius:Math.min(128,hazard.radius+1),severity:Math.min(100,hazard.severity+2)};
}
