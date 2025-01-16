// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
  let countB = Math.floor(B / K)
  let countA = Math.floor((A - 1) / K)
  return countB - countA
}
