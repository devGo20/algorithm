function solution(N) {
  let binary = N.toString(2);
  let cnt = 0;

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1') {
      max = Math.max(max, cnt);
      cnt = 0;
    } else {
      cnt++;
    }
  }

  return max;
}

