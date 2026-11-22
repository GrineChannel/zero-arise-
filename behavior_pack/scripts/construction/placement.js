import {overlaps} from "./blueprints.js";
export function validatePlacement(blueprint,existing=[],protectedAreas=[]){
 if(!blueprint)return {ok:false,reason:"invalid_blueprint"};
 if(existing.some(item=>overlaps(blueprint,item)))return {ok:false,reason:"occupied"};
 if(protectedAreas.some(area=>intersects(blueprint,area)))return {ok:false,reason:"protected_territory"};
 return {ok:true};
}
function intersects(a,b){return a.x<b.x+b.width&&a.x+a.width>b.x&&a.z<b.z+b.depth&&a.z+a.depth>b.z;}
