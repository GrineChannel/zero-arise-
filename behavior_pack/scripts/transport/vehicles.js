import {VEHICLES} from "./vehicle_catalog.js";
export class VehicleRegistry{
 constructor(limit=512){this.limit=limit;this.vehicles=new Map();}
 create({id,type,ownerId,locationId=null}){if(!id||!VEHICLES[type]||this.vehicles.has(id)||this.vehicles.size>=this.limit)return false;this.vehicles.set(id,{id,type,ownerId,locationId,condition:100,cargo:{},active:true});return true;}
 load(id,good,amount){const v=this.vehicles.get(id),spec=v&&VEHICLES[v.type],n=Math.floor(Number(amount)||0);if(!v||!v.active||!good||n<=0)return false;const used=Object.values(v.cargo).reduce((a,b)=>a+b,0);if(used+n>spec.capacity)return false;v.cargo[good]=(v.cargo[good]||0)+n;return true;}
 snapshot(){return [...this.vehicles.values()].map(v=>({...v,cargo:{...v.cargo}}));}
}
