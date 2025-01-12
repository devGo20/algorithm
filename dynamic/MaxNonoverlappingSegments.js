function solution(A, B) {
  let n = A.length;
  let count = 0;
  let lastEnd = -1;

  let segments = [];
  for (let i = 0; i < n; i++) {
    segments.push([A[i], B[i]]);
  }
  segments.sort((a, b) => a[1] - b[1]);
  for (let i = 0; i < n; i++) {
    if (segments[i][0] > lastEnd) {
      lastEnd = segments[i][1];
      console.log(lastEnd)
      count++;
    }
  }

  return count;
}
const A = [1, 3, 7, 9, 9];
const B = [5, 6, 8, 9, 10];
console.log(solution(A, B));  // 3