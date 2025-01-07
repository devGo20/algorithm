//https://app.codility.com/c/run/trainingS37SDF-52K/

function solution(X, A) {
  let positions = new Set();
  for (let idx = 0; idx < A.length; idx++) {
    positions.add(A[idx]);
    if (positions.size === X) {
      return idx
    }
  }
  return -1
}
