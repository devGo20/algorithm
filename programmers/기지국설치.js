function solution(n, stations, w) {
  var answer = 0;
  let position = 1
  let idx = 0
  while (position <= n) {
    if (idx < stations.length && position >= stations[idx] - w) {
      position = stations[idx] + w + 1
      idx++;
    } else {
      answer++
      position += w * 2 + 1
    }
  }

  return answer;
}