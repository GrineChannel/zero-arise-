export const TRANSPORT_INFRASTRUCTURE=Object.freeze({
 dirt_road:{mode:"land",cost:3,capacity:30},stone_road:{mode:"land",cost:8,capacity:100},bridge:{mode:"land",cost:25,capacity:80},railway:{mode:"rail",cost:40,capacity:500},port:{mode:"water",cost:70,capacity:300},airfield:{mode:"air",cost:100,capacity:120},mana_gate:{mode:"magic",cost:180,capacity:50}
});
export function infrastructurePriority({demand=0,existingCapacity=0,damage=0,cost=1}={}){return Math.max(0,(Number(demand)||0)-(Number(existingCapacity)||0))*2+Math.max(0,Number(damage)||0)-Math.max(0,Number(cost)||0)*0.1;}
