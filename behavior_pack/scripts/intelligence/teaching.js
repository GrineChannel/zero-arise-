export function transferKnowledge(teacher,student,ids,quality=0.7) {
  const efficiency=Math.max(0,Math.min(1,Number(quality)||0));
  const learned=[];
  for (const id of ids.slice(0,16)) {
    if (!teacher.knows(id)) continue;
    if (student.learn(id,efficiency,"teaching")) learned.push(id);
  }
  return learned;
}
