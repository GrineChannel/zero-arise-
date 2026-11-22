export const PERSONALITY_TRAITS = Object.freeze(["courage","curiosity","ambition","sociability","compassion","caution","independence","loyalty"]);
export function createPersonality(overrides = {}) {
  const traits = {};
  for (const key of PERSONALITY_TRAITS) {
    const n = Number(overrides[key]);
    traits[key] = Number.isFinite(n) ? Math.max(0, Math.min(100, n)) : 50;
  }
  return traits;
}
export function evolvePersonality(personality, eventEffects = {}) {
  const next = createPersonality(personality);
  for (const key of PERSONALITY_TRAITS) {
    const delta = Number(eventEffects[key]);
    if (Number.isFinite(delta)) next[key] = Math.max(0, Math.min(100, next[key] + Math.max(-5, Math.min(5, delta))));
  }
  return next;
}
