export const BUILDINGS = Object.freeze({
 house:{category:"housing",width:7,depth:7,materials:{wood:24,stone:8},capacity:4},
 farm:{category:"food",width:11,depth:11,materials:{wood:12,stone:4},capacity:0},
 warehouse:{category:"storage",width:9,depth:9,materials:{wood:30,stone:12},capacity:0},
 workshop:{category:"industry",width:9,depth:9,materials:{wood:22,stone:18,iron:4},capacity:0},
 watchtower:{category:"defense",width:5,depth:5,materials:{wood:18,stone:24},capacity:0},
 school:{category:"education",width:11,depth:9,materials:{wood:32,stone:24},capacity:0},
 market:{category:"trade",width:11,depth:11,materials:{wood:28,stone:10},capacity:0}
});
export function getBuilding(id){return BUILDINGS[id]||null;}
