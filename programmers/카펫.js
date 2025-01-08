// https://school.programmers.co.kr/learn/courses/30/lessons/42842
function solution(brown, yellow) {
  let total = brown + yellow
  for (let height = 3; height <= Math.sqrt(total); height++) {
    if (total % height === 0) {
      let width = total / height

      if ((width - 2) * (height - 2) === yellow) {
        return [width, height]
      }
    }
  }
  return answer;
}