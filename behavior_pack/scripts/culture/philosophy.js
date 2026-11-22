export class PhilosophyRegistry{
 constructor(){this.schools=new Map();}
 found({id,founderId,cultureId,principles=[]}){if(!id||this.schools.has(id))return false;this.schools.set(id,{id,founderId,cultureId,principles:[...new Set(principles.map(String))].slice(0,8),influence:1});return true;}
 influence(id,delta){const s=this.schools.get(id);if(!s)return false;s.influence=Math.max(0,Math.min(100,s.influence+(Number(delta)||0)));return true;}
 snapshot(){return [...this.schools.values()].map(s=>({...s,principles:[...s.principles]}));}
}
