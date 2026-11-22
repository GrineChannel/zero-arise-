export const ARCHITECTURE_STYLES=Object.freeze({
 rustic:{preferred:["wood","stone"],roof:"pitched",density:0.3},
 fortified:{preferred:["stone","iron"],roof:"flat",density:0.6},
 forest:{preferred:["wood"],roof:"pitched",density:0.2},
 underground:{preferred:["stone"],roof:"vaulted",density:0.7},
 magitech:{preferred:["crystal","iron","stone"],roof:"spire",density:0.5}
});
export function selectStyle({culture={},terrain="plains",technology=[]}={}){
 if(terrain==="underground")return "underground";
 if(technology.includes("rune_binding")&&technology.includes("advanced_forging"))return "magitech";
 if((culture.martial||0)>=75)return "fortified";
 if(terrain==="forest")return "forest";
 return "rustic";
}
