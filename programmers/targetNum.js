// https://school.programmers.co.kr/learn/courses/30/lessons/43165
function solution(numbers, target) {
  let count = 0;
  let stack = []
  stack.push([0, 0])
  while (stack.length > 0) {
    let [idx, total] = stack.pop()
    if (idx === numbers.length) {
      if (total === target) count++
      continue
    }
    stack.push([idx + 1, total + numbers[idx]])
    stack.push([idx + 1, total - numbers[idx]])
    console.log(stack)
  }
  return count
}

console.log(solution([1, 1, 1, 1, 1], 3))