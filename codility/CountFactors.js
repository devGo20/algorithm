// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      count += 2;
      if (i === N / i) {
        count--; // 36일 경우 6
      }

    }
  }
  return count
}
console.log(solution(24))