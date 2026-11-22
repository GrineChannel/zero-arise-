export const MOVEMENT_GOALS=Object.freeze(["reform","preserve_tradition","education","equality","independence","peace","expansion"]);
export class CulturalMovementRegistry{
 constructor(){this.movements=new Map();}
 create({id,founderId,cultureId,goal}){if(!id||this.movements.has(id)||!MOVEMENT_GOALS.includes(goal))return false;this.movements.set(id,{id,founderId,cultureId,goal,supporters:1,momentum:10});return true;}
 recruit(id,count=1){const m=this.movements.get(id);if(!m)return false;m.supporters+=Math.max(0,Math.floor(Number(count)||0));m.momentum=Math.min(100,m.momentum+Math.min(5,count));return true;}
 snapshot(){return [...this.movements.values()].map(m=>({...m}));}
}
