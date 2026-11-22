export const INFRASTRUCTURE=Object.freeze(["road","bridge","well","aqueduct","warehouse","power_line","mana_conduit"]);
export function infrastructureDemand(settlement){
 const p=Math.max(0,Number(settlement.population)||0);
 const food=Math.max(0,Number(settlement.food)||0);
 const demand=[];
 if(p>=10)demand.push("road");
 if(p>=25)demand.push("well");
 if(p>=50)demand.push("warehouse");
 if(p>=100)demand.push("power_line");
 if(food<p*0.5)demand.push("aqueduct");
 return demand;
}
