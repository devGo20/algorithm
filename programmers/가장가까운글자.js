function solution(s) {
  var answer = [];
  for (let i = 0; i < s.length; i++) {
    if (s.slice(0, i).includes(s[i])) {
      let sliceArr = s.slice(0, i)
      answer.push(sliceArr.length - sliceArr.lastIndexOf(s[i]))
    } else {
      answer.push(-1)
    }
  }
  return answer;
}
console.log(solution("banana")) //	[-1, -1, -1, 2, 2, 2]
console.log(solution("foobar")) //[-1, -1, 1, -1, -1, -1]