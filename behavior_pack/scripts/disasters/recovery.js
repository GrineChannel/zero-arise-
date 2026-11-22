export function repairStructure(structure,materials,workers,hours=1){
 const integrity=Math.max(0,Math.min(100,Number(structure.integrity??100)||0));
 if(integrity>=100)return {...structure,integrity:100};
 const labor=Math.max(0,Math.min(24,Number(hours)||0))*Math.max(0,Number(workers)||0);
 const possible=Math.min(100-integrity,labor*2);
 const units=Math.ceil(possible/10);
 if(!units||(Number(materials.stone)||0)<units)return {...structure};
 materials.stone-=units;
 const next=integrity+possible;
 return {...structure,integrity:next,condition:next<=25?"critical":next<=50?"severe":next<=75?"damaged":"intact"};
}
export function recoveryPriority(structure){const integrity=Math.max(0,Math.min(100,Number(structure.integrity??100)||0));const importance=Math.max(0,Math.min(100,Number(structure.importance??50)||0));return (100-integrity)*0.6+importance*0.4;}
