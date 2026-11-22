export const DEFAULT_CONFIG = Object.freeze({
  clock: { dayMinutes: 120 },
  aging: { childMultiplier: 4, adultMultiplier: 1, elderMultiplier: 1, playerEnabled: false, npcEnabled: true },
  society: { autonomousRelationships: true, inheritance: "mixed" },
  magicSafety: { blockDamage: "limited", anomalySpread: true, protectPlayerTerritories: true, disasterFrequency: "normal" }
});
export const CONFIG_KEY = "zero_arise:config_v1";

export function readConfig(world) {
  try {
    const raw = world.getDynamicProperty(CONFIG_KEY);
    if (typeof raw === "string") {
      const saved = JSON.parse(raw);
      return {
        clock: { ...DEFAULT_CONFIG.clock, ...(saved.clock || {}) },
        aging: { ...DEFAULT_CONFIG.aging, ...(saved.aging || {}) },
        society: { ...DEFAULT_CONFIG.society, ...(saved.society || {}) },
        magicSafety: { ...DEFAULT_CONFIG.magicSafety, ...(saved.magicSafety || {}) }
      };
    }
  } catch (error) {
    console.warn("[ZERO: Arise] Config read failed: " + String(error));
  }
  return JSON.parse(JSON.stringify(DEFAULT_CONFIG));
}
export function saveConfig(world, config) {
  world.setDynamicProperty(CONFIG_KEY, JSON.stringify(config));
}
