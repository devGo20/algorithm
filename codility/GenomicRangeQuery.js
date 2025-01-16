//https://app.codility.com/c/run/trainingRN3E9Q-W23/
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
  let answer = [];
  const N = S.length

  const countA = Array(N + 1).fill(0)
  const countC = Array(N + 1).fill(0)
  const countG = Array(N + 1).fill(0)
  for (let i = 0; i < N; i++) {
    countA[i + 1] = countA[i] + (S[i] === 'A' ? 1 : 0)
    countC[i + 1] = countC[i] + (S[i] === 'C' ? 1 : 0)
    countG[i + 1] = countG[i] + (S[i] === 'G' ? 1 : 0)
  }
  for (let i = 0; i < P.length; i++) {
    const start = P[i]
    const end = Q[i] + 1
    if (countA[end] - countA[start] > 0) {
      answer.push(1)
    } else if (countC[end] - countC[start] > 0) {
      answer.push(2)
    } else if (countG[end] - countG[start] > 0) {
      answer.push(3)
    } else {
      answer.push(4)
    }
  }
  return answer;
}

console.log(solution('CAGCCTA', [2, 5, 0], [4, 5, 6]))