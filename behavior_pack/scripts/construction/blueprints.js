import {getBuilding} from "./building_catalog.js";
export function createBlueprint(type,x,z,style="rustic",rotation=0){
 const def=getBuilding(type);
 if(!def||![x,z].every(Number.isFinite))return null;
 const quarter=((Math.floor(rotation)%4)+4)%4;
 const width=quarter%2?def.depth:def.width;
 const depth=quarter%2?def.width:def.depth;
 return {type,x:Math.floor(x),z:Math.floor(z),width,depth,style,rotation:quarter,materials:{...def.materials},phase:"planned"};
}
export function overlaps(a,b,margin=2){
 return a.x<a.width+b.x+margin&&a.x+a.width+margin>b.x&&a.z<b.z+b.depth+margin&&a.z+a.depth+margin>b.z;
}
