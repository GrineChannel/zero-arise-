// Abstract events only: never mutate Minecraft blocks or spawn entities here.
export const STATE_EVENT_TYPES = Object.freeze(["reform","succession","protest","uprising","coup","civil_war","peace_treaty","cultural_festival"]);
export function proposeStateEvents(state, metrics) {
  const result = [];
  if (metrics.reformDemand) result.push({ type:"reform", factionId:state.id, priority:2 });
  if (metrics.revoltRisk) result.push({ type:"uprising", factionId:state.id, priority:4 });
  if (state.politics?.government === "monarchy" && state.politics?.rulerId === null) result.push({ type:"succession", factionId:state.id, priority:3 });
  return result;
}
