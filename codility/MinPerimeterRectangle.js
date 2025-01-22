// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  let minPerimeter = Infinity;
  for (let i = 1; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      let newPerimeter = (i * 2) + (N / i * 2)
      minPerimeter = Math.min(minPerimeter, newPerimeter)
    }
  }
  return minPerimeter
}
console.log(solution(30));