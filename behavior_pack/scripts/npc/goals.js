export const GOAL_TYPES = Object.freeze(["survive","rest","socialize","earn","learn","explore","craft","join_organization","found_organization","migrate","lead"]);
export function createGoal(type, priority = 50, targetId = null) {
  if (!GOAL_TYPES.includes(type)) throw new Error("Unknown NPC goal: " + type);
  return { type, priority: Math.max(0,Math.min(100,Number(priority)||0)), targetId, progress: 0 };
}
export function rankGoals(goals, needs) {
  const ranked = goals.filter(g=>g && GOAL_TYPES.includes(g.type)).map(g=>({ ...g, score:g.priority + (g.type==="survive" ? Math.max(needs.hunger||0,needs.thirst||0) : 0) + (g.type==="rest" ? (needs.fatigue||0) : 0) }));
  return ranked.sort((a,b)=>b.score-a.score);
}
