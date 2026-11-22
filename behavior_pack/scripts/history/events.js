export const HISTORICAL_EVENTS=Object.freeze(["settlement_founded","state_founded","war_started","war_ended","discovery","disaster","ruler_changed","city_fallen","city_rebuilt","migration","heroic_deed","culture_changed"]);
export function createHistoricalEvent({id,type,day=0,regionId=null,actors=[],details={},importance=50}){
 if(typeof id!=="string"||!id||!HISTORICAL_EVENTS.includes(type))return null;
 return {id,type,day:Math.max(0,Math.floor(Number(day)||0)),regionId,actors:[...actors].slice(0,16),details:{...details},importance:Math.max(0,Math.min(100,Number(importance)||0))};
}
