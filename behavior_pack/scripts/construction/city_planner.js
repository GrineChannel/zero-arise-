import {createBlueprint} from "./blueprints.js";
import {validatePlacement} from "./placement.js";
import {selectStyle} from "./styles.js";
export function recommendBuilding(settlement){
 const p=Math.max(0,Number(settlement.population)||0);
 if((Number(settlement.food)||0)<p*0.5)return "farm";
 if((Number(settlement.housing)||0)<p)return "house";
 if(p>=30&&(Number(settlement.storage)||0)<p)return "warehouse";
 return "workshop";
}
export function planBuilding(settlement,sites,existing=[],protectedAreas=[]){
 const type=recommendBuilding(settlement);
 const style=selectStyle({culture:settlement.culture,terrain:settlement.terrain,technology:settlement.technology||[]});
 for(const site of sites.slice(0,64)){
  const blueprint=createBlueprint(type,site.x,site.z,style);
  if(validatePlacement(blueprint,existing,protectedAreas).ok)return blueprint;
 }
 return null;
}
