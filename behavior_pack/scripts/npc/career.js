export const CAREERS = Object.freeze(["farmer","craftsperson","merchant","scholar","mage","guard","hunter","builder","healer","explorer","leader"]);
export function canChangeCareer(npc, desiredCareer, requirements = {}) {
  if (!CAREERS.includes(desiredCareer)) return false;
  const requiredSkill = requirements.skill;
  const requiredLevel = Math.max(0,Number(requirements.level)||0);
  if (requiredSkill && (Number(npc.skills?.[requiredSkill])||0)<requiredLevel) return false;
  return true;
}
export function changeCareer(npc, desiredCareer, requirements = {}) {
  if (!canChangeCareer(npc,desiredCareer,requirements)) return false;
  npc.career = desiredCareer;
  return true;
}
