// https://app.codility.com/c/run/trainingKS39S8-XNC/

function solution(A) {
  let minDiff = Number.MAX_SAFE_INTEGER;
  let leftSum = 0;
  let allSum = A.reduce((acc, cur) => acc + cur, 0)
  for (let i = 0; i < A.length - 1; i++) {
    leftSum += A[i]
    let rightSum = allSum - leftSum
    let currentResult = Math.abs(leftSum - rightSum)
    minDiff = Math.min(currentResult, minDiff)
  }
  return minDiff
}

console.log(solution([1, 2]))