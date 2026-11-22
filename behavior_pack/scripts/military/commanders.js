export class CommanderRegistry{
 constructor(){this.commanders=new Map();}
 register(id,{leadership=30,tactics=30,logistics=30}={}){if(!id||this.commanders.has(id))return false;this.commanders.set(id,{id,leadership,tactics,logistics,experience:0});return true;}
 learn(id,experience){const c=this.commanders.get(id);if(!c)return false;const gained=Math.max(0,Math.min(20,Number(experience)||0));c.experience=Math.min(100,c.experience+gained);c.tactics=Math.min(100,c.tactics+gained*0.2);return true;}
 snapshot(){return [...this.commanders.values()].map(c=>({...c}));}
}
