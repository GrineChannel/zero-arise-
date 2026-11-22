export function chooseMilitaryStrategy({threat=0,relativeStrength=1,supplies=100,warExhaustion=0}={}){
 if(warExhaustion>=75||supplies<20)return "seek_peace";
 if(threat>=70&&relativeStrength<1)return "fortify";
 if(relativeStrength>=1.5&&supplies>=70)return "offensive";
 if(relativeStrength<0.7)return "defend";
 return "maneuver";
}
