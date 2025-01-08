// https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(s) {
  var answer = true;
  let array = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      array.push(s[i]);
    } else {
      if (array.length === 0) {
        return false
      }
      array.pop();
    }
  }

  return array.length === 0;
}

console.log(solution("(()("))