// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  A = A.sort((a, b) => a - b)
  for (let i = 0; i < A.length - 2; i++) {
    if (A[i] + A[i + 1] > A[i + 2]) {
      return 1;
    }
  }
  return 0
}

const A = [10, 2, 5, 1, 8, 20]; // true
console.log(solution(A));