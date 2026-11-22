export const DOCTRINES=Object.freeze({
 defensive:{attack:0.85,defense:1.3,supply:0.9},
 balanced:{attack:1,defense:1,supply:1},
 mobile:{attack:1.1,defense:0.85,supply:1.2},
 siege:{attack:1.2,defense:0.8,supply:1.4},
 magical:{attack:1.25,defense:0.9,supply:1.5}
});
export function selectDoctrine({threat=0,fortifications=0,mobility=0,magic=0}={}){
 if(threat>=70||fortifications>=70)return "defensive";
 if(magic>=70)return "magical";
 if(mobility>=70)return "mobile";
 return "balanced";
}
