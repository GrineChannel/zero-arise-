export const GOVERNMENTS = Object.freeze(["tribal","monarchy","republic","military","magocracy","council","federation"]);
export function normalizePolitics(state = {}) {
  return {
    government: GOVERNMENTS.includes(state.government) ? state.government : "tribal",
    legitimacy: clamp(state.legitimacy, 0, 100, 50),
    stability: clamp(state.stability, 0, 100, 50),
    taxation: clamp(state.taxation, 0, 1, 0.15),
    warWeariness: clamp(state.warWeariness, 0, 100, 0),
    rulerId: typeof state.rulerId === "string" ? state.rulerId : null
  };
}
function clamp(value, min, max, fallback) { const n = Number(value); return Number.isFinite(n) ? Math.max(min, Math.min(max,n)) : fallback; }
export function evaluatePoliticalPressure(politics, society) {
  const p = normalizePolitics(politics);
  const hunger = clamp(society?.foodShortageRatio,0,1,0);
  const inequality = clamp(society?.inequality,0,1,0);
  const pressure = hunger*35 + inequality*20 + p.taxation*25 + (100-p.legitimacy)*0.25 + p.warWeariness*0.2;
  return { pressure: Math.min(100, Math.round(pressure)), reformDemand: pressure >= 40, revoltRisk: pressure >= 75 && p.stability < 40 };
}
