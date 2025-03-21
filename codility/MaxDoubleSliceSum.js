// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  const N = A.length;
  if (N < 3) return 0

  const leftStartMaxSum = Array(N).fill(0);
  const rightStartMaxSum = Array(N).fill(0);
  for (let i = 1; i < N - 1; i++) {
    leftStartMaxSum[i] = Math.max(leftStartMaxSum[i - 1] + A[i], 0);
  }
  for (let i = N - 2; i > 0; i--) {
    rightStartMaxSum[i] = Math.max(rightStartMaxSum[i + 1] + A[i], 0);
  }
  let maxSum = 0;
  for (let i = 1; i < N - 1; i++) {
    maxSum = Math.max(maxSum, leftStartMaxSum[i - 1] + rightStartMaxSum[i + 1]);
  }

  return maxSum;
}
console.log(solution([3, 2, 6, -1, 4, 5, -1, 2]))