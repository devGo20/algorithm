// https://app.codility.com/c/run/training49BKHG-BNF/

function solution(X, Y, D) {
  let remain = Y - X
  return Math.ceil(remain / D)
}
