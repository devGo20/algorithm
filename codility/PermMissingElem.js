// https://app.codility.com/c/run/trainingZQSFE2-KBE/

function solution(A) {
  const sortedNums = A.sort((a, b) => a - b);

  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] !== i + 1) {
      return i + 1
    }
  }
  return sortedNums.length + 1;
}
