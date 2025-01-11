function solution(s) {
  var answer = [0, 0];
  while (s.length > 1) {
    const zeroCount = (s.match(/0/g) || []).length;
    s = parseInt(s.length - zeroCount).toString(2)
    answer[0] += 1
    answer[1] += zeroCount
  }
  return answer;
}