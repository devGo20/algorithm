// https://school.programmers.co.kr/learn/courses/30/lessons/43162
function solution(n, computers) {
  var answer = 0;
  const visited = Array(n).fill(false);

  function bfs(start) {
    const queue = [start]
    while (queue.length > 0) {
      const node = queue.shift()
      visited[node] = true

      for (let i = 0; i < n; i++) {
        if (computers[node][i] === 1 && !visited[i]) {
          queue.push(i)
        }
      }
    }
  }

  function dfs(node) {
    visited[node] = true
    for (let i = 0; i < n; i++) {
      if (computers[node][i] === 1 && !visited[i]) {
        dfs(i)
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      answer++
      dfs(i)
    }
  }
  return answer;
}

console.log(solution(3, [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1]
])); 