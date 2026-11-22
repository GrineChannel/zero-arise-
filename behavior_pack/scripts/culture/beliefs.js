export class BeliefRegistry{
 constructor(){this.beliefs=new Map();}
 establish({id,cultureId,claims=[],ritualIds=[]}){if(!id||this.beliefs.has(id))return false;this.beliefs.set(id,{id,cultureId,claims:claims.map(String).slice(0,12),ritualIds:ritualIds.map(String).slice(0,12),adherents:0});return true;}
 changeAdherents(id,delta){const b=this.beliefs.get(id);if(!b)return false;b.adherents=Math.max(0,b.adherents+(Number(delta)||0));return true;}
 snapshot(){return [...this.beliefs.values()].map(b=>({...b,claims:[...b.claims],ritualIds:[...b.ritualIds]}));}
}
