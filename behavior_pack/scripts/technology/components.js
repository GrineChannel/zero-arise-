export const COMPONENTS = Object.freeze({
  frame:{slot:"structure",inputs:["wood","stone","iron","alloy"],basePower:0},
  gear:{slot:"transmission",inputs:["wood","iron","copper","alloy"],basePower:0},
  hand_crank:{slot:"power",inputs:["wood","iron"],basePower:8},
  water_wheel:{slot:"power",inputs:["wood","iron"],basePower:20},
  mana_cell:{slot:"power",inputs:["crystal","copper"],basePower:40},
  drill_head:{slot:"tool",inputs:["iron","alloy"],basePower:0},
  millstone:{slot:"tool",inputs:["stone"],basePower:0},
  conveyor:{slot:"transport",inputs:["wood","iron"],basePower:0}
});
export function validateComponent(id,materialId) {
  return Boolean(COMPONENTS[id]?.inputs.includes(materialId));
}
