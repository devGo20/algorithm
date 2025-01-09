// https://school.programmers.co.kr/learn/courses/30/lessons/42862?language=javascript
function solution(n, lost, reserve) {
  const duplicates = [...lost].filter(item => reserve.includes(item));

  reserve = reserve.filter(item => !duplicates.includes(item)).sort(function (a, b) { return a - b })
  lost = lost.filter(item => !duplicates.includes(item)).sort(function (a, b) { return a - b })
  var answer = n - lost.length;
  for (let i = 0; i < reserve.length; i++) {
    const prev = reserve[i] - 1;
    const next = reserve[i] + 1;

    if (lost.includes(prev)) {
      answer++;
      lost = lost.filter(item => item !== prev); // 이전 값 삭제
    } else if (lost.includes(next)) {
      answer++;
      lost = lost.filter(item => item !== next); // 다음 값 삭제
    }
  }

  return answer;
}
const arr1 = [2, 4];
const arr2 = [1, 4, 5];
console.log(solution(5, [5, 3], [4, 2]))