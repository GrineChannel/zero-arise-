export function chooseEvacuation(npc,hazard,shelters=[]){
 const risk=Math.max(0,Number(hazard?.severity)||0);
 const courage=Math.max(0,Math.min(100,Number(npc?.personality?.courage??50)||0));
 if(risk<25)return {action:"monitor",shelterId:null};
 if(risk<55&&courage>=70)return {action:"defend_or_assist",shelterId:null};
 const safe=shelters.filter(s=>s.safe!==false&&Number.isFinite(s.distance)&&s.capacity>s.occupants).sort((a,b)=>a.distance-b.distance);
 return safe.length?{action:"evacuate",shelterId:safe[0].id}:{action:"seek_safety",shelterId:null};
}
