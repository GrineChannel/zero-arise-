export function clampRelation(n){return Math.max(-100,Math.min(100,Number(n)||0));}
export class InternationalRelations{
 constructor(){this.pairs=new Map();}
 key(a,b){return [String(a),String(b)].sort().join("|");}
 get(a,b){return this.pairs.get(this.key(a,b))||{trust:0,tension:0,tradeDependence:0,history:0};}
 adjust(a,b,changes={}){if(a===b)return false;const v=this.get(a,b),next={};for(const k of ["trust","tension","tradeDependence","history"])next[k]=clampRelation(v[k]+(Number(changes[k])||0));this.pairs.set(this.key(a,b),next);return true;}
 snapshot(){return [...this.pairs.entries()].map(([key,value])=>({key,value:{...value}}));}
}
