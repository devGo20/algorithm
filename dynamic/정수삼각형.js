//https://school.programmers.co.kr/learn/courses/30/lessons/43105
function solution(triangle) {
  let dp = triangle[triangle.length - 1].slice()
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[j] = Math.max(dp[j], dp[j + 1]) + triangle[i][j];
    }
  }
  return dp[0];
}
console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]))