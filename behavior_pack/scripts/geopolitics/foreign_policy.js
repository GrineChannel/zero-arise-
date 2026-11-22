export const FOREIGN_POLICIES=Object.freeze(["isolation","trade","balance","expansion","collective_defense"]);
export function chooseForeignPolicy({threat=0,tradeNeed=0,militaryAdvantage=0,culturalOpenness=50}={}){
 if(threat>=70)return "collective_defense";
 if(tradeNeed>=65&&culturalOpenness>=35)return "trade";
 if(militaryAdvantage>=75&&threat<35)return "expansion";
 if(culturalOpenness<20&&tradeNeed<30)return "isolation";
 return "balance";
}
