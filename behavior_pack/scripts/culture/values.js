export const VALUE_KEYS=Object.freeze(["liberty","tradition","curiosity","militarism","cooperation","spirituality","tradeOpenness","equality"]);
export function createValues(overrides={}){const out={};for(const k of VALUE_KEYS){const n=Number(overrides[k]);out[k]=Number.isFinite(n)?Math.max(0,Math.min(100,n)):50;}return out;}
export function shiftValues(values,changes={},maxStep=5){const out=createValues(values);for(const k of VALUE_KEYS){const n=Number(changes[k]);if(Number.isFinite(n))out[k]=Math.max(0,Math.min(100,out[k]+Math.max(-maxStep,Math.min(maxStep,n))));}return out;}
