export const SOCIAL_GROUPS = Object.freeze(["farmers","craftspeople","merchants","scholars","mages","soldiers","nobility","laborers"]);
export function createSocialGroup(type, population = 0) {
  if (!SOCIAL_GROUPS.includes(type)) throw new Error("Unknown social group");
  return { type, population: Math.max(0,Math.floor(Number(population)||0)), prosperity: 50, loyalty: 50, unrest: 0 };
}
export function advanceSocialGroup(group, { foodAccess = 1, taxRate = 0.15, security = 0.5 } = {}) {
  const food = Math.max(0,Math.min(1,Number(foodAccess)||0));
  const tax = Math.max(0,Math.min(1,Number(taxRate)||0));
  const safe = Math.max(0,Math.min(1,Number(security)||0));
  group.prosperity = limit(group.prosperity + food*3 - tax*6 - (1-safe)*3);
  group.loyalty = limit(group.loyalty + (group.prosperity-50)*0.04 - tax*2);
  group.unrest = limit(group.unrest + (50-group.prosperity)*0.06 + (50-group.loyalty)*0.04);
  return group;
}
function limit(n) { return Math.max(0,Math.min(100,n)); }
