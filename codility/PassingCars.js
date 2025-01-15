function solution(A) {
  let answer = 0
  let eastCnt = 0
  for (var i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      eastCnt++
    } else {
      answer += (eastCnt * 1)
    }
    if (answer > 1000000000) {
      return -1
    }
  }
  return answer
}
