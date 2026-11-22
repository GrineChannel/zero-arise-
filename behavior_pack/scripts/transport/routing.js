export function shortestRoute(network,start,goal,mode=null,maxVisits=256){
 if(start===goal)return {path:[start],distance:0};
 const dist=new Map([[start,0]]),previous=new Map(),visited=new Set();
 while(visited.size<maxVisits){
  let current=null,best=Infinity;
  for(const [id,d] of dist)if(!visited.has(id)&&d<best){current=id;best=d;}
  if(current===null)break;if(current===goal)break;visited.add(current);
  for(const n of network.neighbors(current,mode)){const cost=n.distance*(1+(100-n.condition)/100),candidate=best+cost;if(candidate<(dist.get(n.id)??Infinity)){dist.set(n.id,candidate);previous.set(n.id,current);}}
 }
 if(!dist.has(goal))return null;
 const path=[goal];while(path[0]!==start){const prev=previous.get(path[0]);if(prev===undefined)return null;path.unshift(prev);}
 return {path,distance:dist.get(goal)};
}
