// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  const frequencyMap = {};
  for (const element of A) {
    frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    if (frequencyMap[element] > Math.floor(A.length / 2)) {
      return A.indexOf(element)
    }
  }

  return -1;
}
let A = [3, 4, 3, 2, 3, -1, 3, 3]

console.log(solution(A)) // 2