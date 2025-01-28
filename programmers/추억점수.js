function solution(name, yearning, photo) {
  let answer = [];
  const yearnMap = new Map();
  yearning.forEach((yean, idx) => yearnMap.set(name[idx], yean));
  for (let p of photo) {
    let sum = 0
    for (let name of p) {
      let score = yearnMap.get(name) || 0;
      sum += score
    }
    answer.push(sum);
  }
  return answer
}
console.log(solution(
  ["may", "kein", "kain", "radi"],
  [5, 10, 1, 3],
  [["may", "kein", "kain", "radi"], ["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]
)); // [19, 15, 6]

// 두 번째 데이터 세트
console.log(solution(
  ["kali", "mari", "don"],
  [11, 1, 55],
  [["kali", "mari", "don"], ["pony", "tom", "teddy"], ["con", "mona", "don"]]
)); // [67, 0, 55]
