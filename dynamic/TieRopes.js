function solution(K, A) {
  let count = 0
  let tieLength = 0

  for (let i = 0; i < A.length; i++) {
    tieLength += A[i]
    if (tieLength >= K) {
      count++
      tieLength = 0
    }
  }
  return count
}