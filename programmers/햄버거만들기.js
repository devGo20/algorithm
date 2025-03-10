function solution(ingredient) {
  var answer = 0;
  let stack = [];
  for (let target of ingredient) {
    stack.push(target)
    if (stack.length >= 4 && stack.slice(-4).join('') === "1231") {
      answer += 1;
      stack.splice(-4)
    }
  }
  return answer;
}
console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]))