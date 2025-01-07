// https://app.codility.com/c/run/trainingT9BWU2-DP7/

function solution(A) {
  let numbers = new Set();
  let N = A.length;
  for (let num of A) {
    if (num < 1 || num > N || numbers.has(num)) {
      return 0
    }
    numbers.add(num);
  }
  return numbers.size === N ? 1 : 0;
}

