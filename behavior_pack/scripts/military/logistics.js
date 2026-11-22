import {unitStats} from "./unit_catalog.js";
export function dailySupplyNeed(army){return Object.entries(army.units||{}).reduce((sum,[type,count])=>sum+(unitStats(type)?.supply||0)*Math.max(0,Number(count)||0),0);}
export function consumeSupplies(army,days=1){const needed=dailySupplyNeed(army)*Math.max(0,Number(days)||0);const available=Math.max(0,Number(army.supplies)||0);const consumed=Math.min(needed,available);const ratio=needed>0?consumed/needed:1;return {...army,supplies:available-consumed,morale:Math.max(0,Math.min(100,(Number(army.morale)||0)-(1-ratio)*15)),supplyRatio:ratio};}
