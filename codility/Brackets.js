// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  const brakets = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  const stack = []
  for (let braket of S) {
    if (brakets.hasOwnProperty(braket)) {
      if (stack.pop() === brakets[braket]) {
        continue
      } else {
        return 0
      }
    } else {
      stack.push(braket)
    }
  }
  return stack.length === 0 ? 1 : 0
}
console.log(solution('()'))