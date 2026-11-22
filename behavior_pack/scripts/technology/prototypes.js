export function testPrototype(invention,quality = 50,roll = 0.5) {
  if (!invention?.stats) return {success:false,reason:"invalid_invention"};
  const q=Math.max(0,Math.min(100,Number(quality)||0));
  const r=Number(roll);
  if (!Number.isFinite(r)||r<0||r>=1) return {success:false,reason:"invalid_roll"};
  const chance=Math.max(0.05,Math.min(0.95,0.25+q/200+invention.stats.durability/500-invention.stats.complexity/1000));
  return {success:r<chance,chance,wear:Math.max(0,100-invention.stats.durability)};
}
