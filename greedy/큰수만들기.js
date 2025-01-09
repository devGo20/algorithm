// https://school.programmers.co.kr/learn/courses/30/lessons/42883#
function solution(number, k) {
  let stack = []
  for (let i = 0; i < number.length; i++) {
    while (stack.length > 0 && number[i] > stack[stack.length - 1] && k > 0) {
      stack.pop()
      k--
    }
    stack.push(number[i])

  }
  return stack.slice(0, stack.length - k).join('');
}