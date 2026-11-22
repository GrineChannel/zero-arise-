export const TREATY_TYPES=Object.freeze(["non_aggression","defense","trade","peace","open_borders","research_exchange","vassalage"]);
export class TreatyRegistry{
 constructor(limit=256){this.limit=limit;this.treaties=new Map();}
 sign({id,type,parties,startDay=0,durationDays=null}){if(!id||this.treaties.has(id)||this.treaties.size>=this.limit||!TREATY_TYPES.includes(type)||!Array.isArray(parties)||new Set(parties).size<2)return false;this.treaties.set(id,{id,type,parties:[...new Set(parties)].slice(0,16),startDay,durationDays,active:true});return true;}
 revoke(id){const t=this.treaties.get(id);if(!t||!t.active)return false;t.active=false;return true;}
 activeFor(factionId,day){return [...this.treaties.values()].filter(t=>t.active&&t.parties.includes(factionId)&&(t.durationDays===null||day<t.startDay+t.durationDays));}
 snapshot(){return [...this.treaties.values()].map(t=>({...t,parties:[...t.parties]}));}
}
