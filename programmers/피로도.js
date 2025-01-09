// https://school.programmers.co.kr/learn/courses/30/lessons/87946
function solution(k, dungeons) {
  var answer = -1;
  function dfs(k, dungeons, visited, count) {
    answer = Math.max(answer, count)

    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && k >= dungeons[i][0]) {
        visited[i] = true
        dfs(k - dungeons[i][1], dungeons, visited, count + 1)
        visited[i] = false
      }
    }
  }
  visited = Array(dungeons).fill(false)
  dfs(k, dungeons, visited, 0)
  return answer;
}

k = 80
dungeons = [[80, 20], [50, 40], [30, 10]]
result = solution(k, dungeons)
console.log(result)