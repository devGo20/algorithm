// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let answer = []
  let n = A.length - 1
  A = A.sort((a, b) => b - a)

  return Math.max(A[0] * A[1] * A[2], A[n] * A[n - 1] * A[0]) // 최소 두값 음수일 경우 양수로 바뀜
}
let A = []
A[0] = -3
A[1] = 1
A[2] = 2
A[3] = -2
A[4] = 5
A[5] = 6
console.log(solution(A));