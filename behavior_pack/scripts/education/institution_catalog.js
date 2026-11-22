export const INSTITUTIONS=Object.freeze({
 school:{capacity:30,subjects:["literacy","numeracy"],cost:10},
 workshop_school:{capacity:12,subjects:["crafting","farming","engineering"],cost:15},
 university:{capacity:80,subjects:["science","engineering","history","medicine"],cost:80},
 magic_academy:{capacity:35,subjects:["mana","runes","rituals"],cost:100},
 research_institute:{capacity:25,subjects:["science","engineering","mana"],cost:120},
 military_academy:{capacity:30,subjects:["strategy","logistics","leadership"],cost:70},
 library:{capacity:50,subjects:["literacy","history","science"],cost:35}
});
export function institutionType(id){return INSTITUTIONS[id]||null;}
