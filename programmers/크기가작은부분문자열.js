function solution(t, p) {
  var answer = 0;
  const pLen = p.length;
  for (var i = 0; i < t.length - pLen + 1; i++) {
    if (t.slice(i, i + pLen) <= p) {
      answer++;
    }
  }
  return answer;
}
console.log(solution("3141592", "271")) // 2
console.log(solution("500220839878", "7")) //	8
console.log(solution("10203", "15"))	//3