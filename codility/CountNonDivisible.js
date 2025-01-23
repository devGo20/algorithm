function solution(A) {
  let answer = Array(A.length).fill(A.length - 1)
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (i === j) continue;
      if (A[i] >= A[j] && A[i] % A[j] === 0) {
        answer[i] -= 1
      }
    }
  }
  return answer
}
console.log(solution([3, 1, 2, 3, 6]))