export const CULTURAL_TRAITS = Object.freeze(["martial","mercantile","scholarly","magical","agrarian","communal","expansionist","isolationist"]);
export function createCulture(id, traits = {}, traditions = []) {
  const weights = {};
  for (const trait of CULTURAL_TRAITS) weights[trait] = bound(traits[trait]);
  return { id: String(id), traits: weights, traditions: traditions.filter(t=>typeof t==="string").slice(0,16), revision: 0 };
}
function bound(n) { const value = Number(n); return Number.isFinite(value) ? Math.max(0, Math.min(100, value)) : 50; }
export function culturalExchange(a, b, intensity = 0.05) {
  const rate = Math.max(0,Math.min(0.25,Number(intensity)||0));
  const left = createCulture(a.id,a.traits,a.traditions);
  const right = createCulture(b.id,b.traits,b.traditions);
  for (const trait of CULTURAL_TRAITS) {
    left.traits[trait] = bound(a.traits[trait] + (b.traits[trait]-a.traits[trait])*rate);
    right.traits[trait] = bound(b.traits[trait] + (a.traits[trait]-b.traits[trait])*rate);
  }
  left.revision = (a.revision||0)+1;
  right.revision = (b.revision||0)+1;
  return [left,right];
}
