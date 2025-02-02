function solution(n, m, section) {
  var answer = 0;
  let wall = Array(n).fill(true)
  for (let sec of section) {
    wall[sec] = false
  }
  for (let i = 0; i < wall.length; i++) {
    if (wall[i] === false) {
      answer++;
      for (let j = 0; j < m; j++) {
        wall[i + j] = true
      }
    }
  }
  return answer;
}

console.log(solution(4, 1, [1, 2, 3, 4]))