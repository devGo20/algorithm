// https://school.programmers.co.kr/learn/courses/30/lessons/42747
function solution(citations) {
  let sortedCitations = citations.sort((a, b) => b - a);
  let answer = 0
  for (let i = 0; i < sortedCitations.length; i++) {
    if (sortedCitations[i] >= i + 1) {
      answer++
    } else {
      break
    }
  }
  return answer
}

console.log(solution([3, 0, 6, 1, 5]));