// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  let stack = []
  for (let char of S) {
    if (char === '(') {
      stack.push(')')
    } else if (char === ')') {
      if (stack.pop() !== char) {
        return 0
      }
    }
  }
  return stack.length === 0 ? 1 : 0
  // Implement your solution here
}
