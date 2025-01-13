function solution(A) {
  const N = A.length;
  const dp = new Array(N).fill(-Infinity);
  dp[0] = A[0]; // 첫 번째 칸은 항상 표시됨

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j <= 6; j++) {
      if (i - j >= 0) {
        dp[i] = Math.max(dp[i], dp[i - j] + A[i]);
      }
    }
  }

  return dp[N - 1]; // 마지막 칸의 최대값 반환
}

console.log(solution([1, -2, 0, 9, -1, -2])); // 8
