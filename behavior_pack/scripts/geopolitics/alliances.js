export class AllianceRegistry{
 constructor(){this.alliances=new Map();}
 found(id,members=[],purpose="defense"){if(!id||this.alliances.has(id)||new Set(members).size<2)return false;this.alliances.set(id,{id,members:[...new Set(members)].slice(0,32),purpose,cohesion:50});return true;}
 join(id,faction){const a=this.alliances.get(id);if(!a||a.members.includes(faction)||a.members.length>=32)return false;a.members.push(faction);return true;}
 leave(id,faction){const a=this.alliances.get(id);if(!a)return false;const i=a.members.indexOf(faction);if(i<0)return false;a.members.splice(i,1);return true;}
 snapshot(){return [...this.alliances.values()].map(a=>({...a,members:[...a.members]}));}
}
