function solution(A, K) {
  const n = A.length;

  if (n === 0 || K % n === 0) {
    return A;
  }

  const copy = new Array(n);

  for (let i = 0; i < n; i++) {
    const idx = (i + K) % n;
    copy[idx] = A[i];
  }

  return copy;
}