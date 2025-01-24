// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function gcd(a, b) {
  while (b !== 0) {
    console.log(a, b)
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function solution(N, M) {
  return N / gcd(N, M);
}

console.log(solution(10, 4))