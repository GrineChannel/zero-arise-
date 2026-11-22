export const ZONES=Object.freeze(["housing","food","industry","trade","defense","education","storage"]);
export function zoneSuitability(zone,{waterDistance=100,roadDistance=100,threat=0,slope=0}={}){
 if(!ZONES.includes(zone))return -Infinity;
 const road=Math.max(0,100-roadDistance)*0.3;
 const flat=Math.max(0,100-slope*20);
 const water=zone==="food"?Math.max(0,100-waterDistance):0;
 const security=zone==="defense"?threat:100-threat;
 return road+flat+water*0.5+security*0.25;
}
