// https://school.programmers.co.kr/learn/courses/30/lessons/86491?language=javascript
function solution(sizes) {
  const sortedSizes = sizes.map(([a, b]) => a < b ? [b, a] : [a, b])
  const maxFirstElement = Math.max(...sortedSizes.map(([a, b]) => a));
  const minSecondElement = Math.max(...sortedSizes.map(([a, b]) => b))
  return maxFirstElement * minSecondElement;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))