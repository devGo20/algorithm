// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
  // Implement your solution here
  let stack = []
  for (let i = 0; i < A.length; i++) {
    if (B[i] === 1) {
      stack.push([A[i], B[i]])
    } else {
      while (stack.length > 0 && stack[stack.length - 1][1] === 1) {
        if (stack[stack.length - 1][0] > A[i]) {
          break;
        } else {
          stack.pop();
        }
      }
      if (stack.length === 0 || stack[stack.length - 1][1] === 0) {
        stack.push([A[i], B[i]])
      }
    }
  }
  return stack.length
}

console.log(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]))