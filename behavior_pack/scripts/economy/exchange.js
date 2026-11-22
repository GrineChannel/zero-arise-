export class ExchangeRegistry{
 constructor(){this.rates=new Map();}
 setRate(from,to,numerator,denominator=1){if(!from||!to||from===to||!Number.isSafeInteger(numerator)||!Number.isSafeInteger(denominator)||numerator<=0||denominator<=0)return false;this.rates.set(from+"|"+to,{from,to,numerator,denominator});return true;}
 convert(from,to,amount){if(from===to)return Math.max(0,Math.floor(amount));const r=this.rates.get(from+"|"+to);return r?Math.max(0,Math.floor(Math.max(0,Math.floor(amount))*r.numerator/r.denominator)):null;}
 snapshot(){return [...this.rates.values()].map(r=>({...r}));}
}
