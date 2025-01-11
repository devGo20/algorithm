function solution(A, B) {
  var answer = 0;
  A = A.sort((a, b) => b - a)
  B = B.sort((a, b) => b - a)
  while (B.length > 0) {
    for (let i = 0; i < A.length; i++) {
      if (A[i] < B[0]) {
        B.shift()
        answer++
      } else {
        B.pop()
      }
    }
  }

  return answer;
}