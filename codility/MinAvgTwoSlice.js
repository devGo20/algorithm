// https://app.codility.com/c/run/trainingR3GBPQ-E9Y/
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  if (A.length < 2) return 0
  let minAvg = (A[0] + A[1]) / 2
  let minStartIndex = 0

  for (let i = 0; i < A.length; i++) {
    let length2Avg = (A[i] + A[i + 1]) / 2
    if (length2Avg < minAvg) {
      minAvg = length2Avg
      minStartIndex = i
    }
    if (i < A.length - 2) {
      let length3Avg = (A[i] + A[i + 1] + A[i + 2]) / 3
      if (length3Avg < minAvg) {
        minAvg = length3Avg
        minStartIndex = i
      }
    }
  }
  return minStartIndex
}
const A = []
A[0] = 4
A[1] = 2
A[2] = 2
A[3] = 5
A[4] = 1
A[5] = 5
A[6] = 8
console.log(solution(A))