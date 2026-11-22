export const MATERIALS = Object.freeze({
  wood:{strength:25,weight:20,conductivity:5,magicAffinity:10,cost:2},
  stone:{strength:50,weight:70,conductivity:2,magicAffinity:15,cost:3},
  iron:{strength:75,weight:65,conductivity:55,magicAffinity:15,cost:8},
  copper:{strength:45,weight:55,conductivity:90,magicAffinity:25,cost:7},
  crystal:{strength:35,weight:30,conductivity:20,magicAffinity:95,cost:18},
  alloy:{strength:90,weight:60,conductivity:65,magicAffinity:40,cost:16}
});
export function getMaterial(id) { return MATERIALS[id] || null; }
export function materialScore(id, property) { const m=getMaterial(id);return m&&typeof m[property]==="number"?m[property]:0; }
