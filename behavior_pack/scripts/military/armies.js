import {unitStats} from "./unit_catalog.js";
export class ArmyRegistry{
 constructor(limit=256){this.limit=limit;this.armies=new Map();}
 create({id,factionId,commanderId=null,x=0,z=0}){if(!id||this.armies.has(id)||this.armies.size>=this.limit)return false;this.armies.set(id,{id,factionId,commanderId,x,z,units:{},morale:70,experience:0,supplies:0});return true;}
 recruit(id,type,count){const a=this.armies.get(id),n=Math.floor(Number(count)||0);if(!a||!unitStats(type)||n<=0||n>1000)return false;a.units[type]=(a.units[type]||0)+n;return true;}
 strength(id){const a=this.armies.get(id);if(!a)return 0;return Object.entries(a.units).reduce((sum,[type,n])=>sum+(unitStats(type)?.attack||0)*n,0);}
 snapshot(){return [...this.armies.values()].map(a=>({...a,units:{...a.units}}));}
}
