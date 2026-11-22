import {applyDamage} from "./damage.js";
import {exposure} from "./hazards.js";
import {spreadHazard} from "./spread.js";
export class DisasterSimulation{
 constructor(){this.hazards=new Map();}
 add(hazard){if(!hazard||this.hazards.has(hazard.id)||this.hazards.size>=128)return false;this.hazards.set(hazard.id,{...hazard});return true;}
 impact(structure,position,{protectedTerritory=false}={}){
  let next={...structure};
  for(const h of this.hazards.values()){
   if(!h.active)continue;
   next=applyDamage(next,exposure(h,position)/10,{protectedTerritory,maxDamage:10});
  }
  return next;
 }
 advance(conditions={},roll=0.5){for(const [id,h] of this.hazards)this.hazards.set(id,spreadHazard(h,conditions,roll));}
 snapshot(){return [...this.hazards.values()].map(h=>({...h}));}
}
