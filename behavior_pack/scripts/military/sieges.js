export class SiegeRegistry{
 constructor(){this.sieges=new Map();}
 begin({id,attackerArmyId,settlementId,defense=100}){if(!id||this.sieges.has(id))return false;this.sieges.set(id,{id,attackerArmyId,settlementId,defense:Math.max(0,Math.min(100,Number(defense)||0)),days:0,active:true});return true;}
 advance(id,pressure=0,repair=0){const s=this.sieges.get(id);if(!s||!s.active)return null;s.days++;s.defense=Math.max(0,Math.min(100,s.defense-Math.max(0,Math.min(25,Number(pressure)||0))+Math.max(0,Math.min(15,Number(repair)||0))));if(s.defense===0)s.active=false;return {...s};}
 snapshot(){return [...this.sieges.values()].map(s=>({...s}));}
}
