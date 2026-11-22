export const DEFAULT_DISASTER_SAFETY=Object.freeze({blockDamage:"limited",anomalySpread:true,protectPlayerTerritories:true,frequency:"normal",maxBlockEditsPerTick:8});
export function canModifyBlock({protectedTerritory=false,loaded=false,editsThisTick=0,config=DEFAULT_DISASTER_SAFETY}={}){
 if(!loaded)return false;
 if(config.protectPlayerTerritories&&protectedTerritory)return false;
 if(config.blockDamage==="disabled")return false;
 return editsThisTick<Math.max(0,Number(config.maxBlockEditsPerTick)||0);
}
