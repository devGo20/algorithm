//https://school.programmers.co.kr/learn/courses/30/lessons/42746?language=javascript
function solution(numbers) {
  const sortedNumbers = numbers
    .map(String)
    .sort((a, b) => (b + a) - (a + b));

  if (sortedNumbers[0] === '0') {
    return '0';
  }

  return sortedNumbers.join('');
}

console.log(solution([6, 10, 2]));

console.log(solution([6, 10, 2]))
console.log(solution([3, 30, 34, 5, 9]))