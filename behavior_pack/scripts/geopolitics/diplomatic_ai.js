import {chooseForeignPolicy} from "./foreign_policy.js";
export function decideDiplomaticAction(state,neighbors=[]){
 const policy=chooseForeignPolicy(state);
 const sorted=[...neighbors].sort((a,b)=>(Number(b.threat)||0)-(Number(a.threat)||0));
 const neighbor=sorted[0];if(!neighbor)return {policy,action:"develop_internal_relations",target:null};
 if(policy==="collective_defense")return {policy,action:"seek_defensive_alliance",target:neighbor.id};
 if(policy==="trade")return {policy,action:"propose_trade",target:neighbor.id};
 if(policy==="expansion")return {policy,action:"pressure_neighbor",target:neighbor.id};
 if(policy==="isolation")return {policy,action:"secure_borders",target:neighbor.id};
 return {policy,action:"negotiate",target:neighbor.id};
}
