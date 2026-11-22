export const NEED_KEYS = Object.freeze(["hunger","thirst","fatigue","safety","social"]);
export function createNeeds(overrides = {}) {
  const result = {};
  for (const key of NEED_KEYS) result[key] = clamp(overrides[key], 0, 100, 0);
  return result;
}
function clamp(n, min, max, fallback) { const value = Number(n); return Number.isFinite(value) ? Math.max(min, Math.min(max,value)) : fallback; }
export function advanceNeeds(needs, hours = 1) {
  const h = clamp(hours, 0, 24, 0);
  return createNeeds({ hunger:needs.hunger+h*3, thirst:needs.thirst+h*5, fatigue:needs.fatigue+h*2, safety:needs.safety, social:needs.social+h });
}
