// https://app.codility.com/c/run/training49BKHG-BNF/

function solution(X, Y, D) {
  let remain = Y - X
  let jumpCnt = remain / D
  if (jumpCnt * D + X > Y) {
    return jumpCnt
  } else {
    return jumpCnt + 1
  }
}
