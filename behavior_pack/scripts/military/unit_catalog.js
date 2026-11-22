export const UNIT_TYPES=Object.freeze({
 militia:{attack:8,defense:8,speed:5,supply:1,cost:2},
 infantry:{attack:15,defense:18,speed:4,supply:2,cost:5},
 archer:{attack:20,defense:7,speed:5,supply:2,cost:6},
 cavalry:{attack:26,defense:13,speed:9,supply:4,cost:12},
 scout:{attack:9,defense:6,speed:10,supply:1,cost:5},
 engineer:{attack:5,defense:8,speed:4,supply:3,cost:8},
 battlemage:{attack:32,defense:8,speed:5,supply:5,cost:18}
});
export function unitStats(type){return UNIT_TYPES[type]||null;}
