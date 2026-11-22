export const VEHICLES=Object.freeze({
 pack_animal:{mode:"land",capacity:8,speed:4,upkeep:1,requires:[]},
 cart:{mode:"land",capacity:35,speed:5,upkeep:2,requires:["metalworking"]},
 riverboat:{mode:"water",capacity:60,speed:6,upkeep:3,requires:[]},
 sailing_ship:{mode:"water",capacity:220,speed:9,upkeep:7,requires:["metalworking"]},
 locomotive:{mode:"rail",capacity:500,speed:18,upkeep:12,requires:["advanced_forging"]},
 airship:{mode:"air",capacity:140,speed:16,upkeep:15,requires:["advanced_forging"]},
 mana_skiff:{mode:"magic",capacity:50,speed:20,upkeep:12,requires:["mana_control","rune_binding"]}
});
export function availableVehicles(known=[]){const set=new Set(known);return Object.entries(VEHICLES).filter(([,v])=>v.requires.every(r=>set.has(r))).map(([id])=>id);}
