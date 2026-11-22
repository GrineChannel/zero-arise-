export const EQUIPMENT_TIERS=Object.freeze({
 improvised:{attack:0,defense:0,maintenance:1},
 bronze:{attack:2,defense:2,maintenance:2},
 iron:{attack:5,defense:4,maintenance:3},
 alloy:{attack:8,defense:7,maintenance:5},
 enchanted:{attack:12,defense:9,maintenance:8}
});
export function equipmentEffect(tier,condition=100){const t=EQUIPMENT_TIERS[tier];if(!t)return null;const factor=Math.max(0,Math.min(1,(Number(condition)||0)/100));return {attack:t.attack*factor,defense:t.defense*factor,maintenance:t.maintenance};}
