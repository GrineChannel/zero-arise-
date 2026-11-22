// Discoveries compose predefined effects and recipes; never generate executable scripts.
export const RESEARCH_CATALOG = Object.freeze({
  improved_farming:{field:"agriculture",requires:[],difficulty:10,unlocks:["crop_rotation"]},
  metalworking:{field:"industry",requires:[],difficulty:20,unlocks:["metal_tools"]},
  advanced_forging:{field:"industry",requires:["metalworking"],difficulty:40,unlocks:["reinforced_tools"]},
  mana_control:{field:"magic",requires:[],difficulty:25,unlocks:["mana_focus"]},
  rune_binding:{field:"magic",requires:["mana_control"],difficulty:45,unlocks:["basic_rune"]},
  magitech_tools:{field:"magitech",requires:["advanced_forging","rune_binding"],difficulty:70,unlocks:["powered_tool"]}
});
export function researchable(knowledge) {
  return Object.entries(RESEARCH_CATALOG).filter(([id,def])=>!knowledge.knows(id) && def.requires.every(req=>knowledge.knows(req))).map(([id])=>id);
}
