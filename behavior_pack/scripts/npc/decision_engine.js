import { rankGoals } from "./goals.js";
export function chooseNpcIntent(npc, context = {}) {
  const needs = npc.needs || {};
  if ((needs.thirst||0)>=80) return { type:"seek_water", reason:"critical_thirst" };
  if ((needs.hunger||0)>=80) return { type:"seek_food", reason:"critical_hunger" };
  if ((needs.fatigue||0)>=85) return { type:"rest", reason:"critical_fatigue" };
  const goal = rankGoals(npc.goals||[], needs)[0];
  if (!goal) return { type:"idle", reason:"no_goals" };
  if (context.danger && (npc.personality?.courage||50)<60) return { type:"seek_safety", reason:"danger" };
  return { type:"pursue_goal", goal:goal.type, targetId:goal.targetId||null, reason:"highest_priority" };
}
