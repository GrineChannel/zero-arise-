export const DAMAGE_STATES=Object.freeze(["destroyed","critical","severe","damaged","intact"]);
export function conditionState(integrity){const n=Math.max(0,Math.min(100,Number(integrity)||0));return n===0?"destroyed":n<=25?"critical":n<=50?"severe":n<=75?"damaged":"intact";}
export function applyDamage(structure,amount,{protectedTerritory=false,maxDamage=25}={}){
 const before=Math.max(0,Math.min(100,Number(structure.integrity??100)||0));
 const applied=protectedTerritory?0:Math.max(0,Math.min(maxDamage,Number(amount)||0));
 const after=Math.max(0,before-applied);
 return {...structure,integrity:after,condition:conditionState(after)};
}
export function operationalEfficiency(integrity){const n=Math.max(0,Math.min(100,Number(integrity)||0));return n===0?0:n<=25?0.1:n<=50?0.4:n<=75?0.75:1;}
