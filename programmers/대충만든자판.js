function solution(keymap, targets) {
  var answer = [];
  for (let target of targets) {
    let sum = 0;
    for (let i = 0; i < target.length; i++) {
      let minCount = Infinity
      for (let key of keymap) {
        let index = key.indexOf(target[i])
        if (index === -1) {
          continue;
        }
        minCount = Math.min(minCount, index + 1)
      }
      sum += minCount;
    }
    if (sum === Infinity) {
      answer.push(-1);
      continue;
    }
    answer.push(sum);
  }
  return answer;
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"]))
console.log(solution(["AA"], ["B"]))