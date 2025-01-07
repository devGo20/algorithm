// https://app.codility.com/c/run/trainingBY5FBH-RMT/
function solution(A) {
  const sortedNums = A.sort((a, b) => a - b);
  let target = 1;
  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] === target) {
      target++;
    }
  }

  return target;
}
