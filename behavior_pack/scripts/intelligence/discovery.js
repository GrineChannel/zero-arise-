// Bounded experimentation over predefined research catalog.
import { RESEARCH_CATALOG } from "./research_catalog.js";
export function attemptDiscovery(id,knowledge,skill,roll) {
  const def=RESEARCH_CATALOG[id];
  if (!def || knowledge.knows(id) || !def.requires.every(req=>knowledge.knows(req))) return {success:false,reason:"unavailable"};
  const chance=Math.max(0.02,Math.min(0.85,(Number(skill)||0)/(def.difficulty*2+50)));
  const r=Number(roll);
  if (!Number.isFinite(r)||r<0||r>=1) return {success:false,reason:"invalid_roll"};
  if (r>=chance) return {success:false,reason:"failed_experiment",chance};
  knowledge.learn(id,1,"discovery");
  return {success:true,id,unlocks:[...def.unlocks],chance};
}
