import { COMPONENTS,validateComponent } from "./components.js";
import { materialScore } from "./materials.js";
export function createInvention(id,parts) {
  if (typeof id!=="string"||!id||!Array.isArray(parts)||parts.length<2||parts.length>12) return null;
  const normalized=[];
  for (const p of parts) {
    if (!p||!validateComponent(p.component,p.material)) return null;
    normalized.push({component:p.component,material:p.material});
  }
  const power=normalized.reduce((s,p)=>s+COMPONENTS[p.component].basePower,0);
  const durability=normalized.reduce((s,p)=>s+materialScore(p.material,"strength"),0)/normalized.length;
  const efficiency=Math.max(0,Math.min(100,power*1.5+durability*0.25));
  const complexity=normalized.length*10;
  return {id,parts:normalized,stats:{power,durability,efficiency,complexity},revision:1};
}
export function reviseInvention(invention,parts) {
  const next=createInvention(invention.id,parts);
  if (!next) return null;
  next.revision=(Number(invention.revision)||1)+1;
  return next;
}
