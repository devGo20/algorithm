// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(K, A) {
  let count = 0;
  let n = A.length;
  while (i < n - 1) {
    let tieSum = A[i] + A[i + 1]
    if (tieSum >= K) {
      i += 2
      count++
    } else {
      i++
    }
  }
  return count;
}
