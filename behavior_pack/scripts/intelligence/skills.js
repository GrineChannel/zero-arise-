export const SKILL_NAMES = Object.freeze(["combat","crafting","farming","trading","research","magic","leadership","survival"]);
export function createSkills(overrides = {}) {
  const skills = {};
  for (const name of SKILL_NAMES) {
    const value = Number(overrides[name]);
    skills[name] = Number.isFinite(value) ? Math.max(0,Math.min(100,value)) : 0;
  }
  return skills;
}
export function practiceSkill(skills, name, effort = 1, aptitude = 1) {
  if (!SKILL_NAMES.includes(name)) return 0;
  const current = Math.max(0,Math.min(100,Number(skills[name])||0));
  const safeEffort = Math.max(0,Math.min(10,Number(effort)||0));
  const safeAptitude = Math.max(0,Math.min(2,Number(aptitude)||0));
  const gain = safeEffort * safeAptitude * (1-current/110);
  skills[name] = Math.min(100,current+gain);
  return skills[name]-current;
}
