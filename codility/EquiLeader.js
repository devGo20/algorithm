function solution(A) {
  const frequencyMap = {};
  let leader = -1;
  let leaderCount = 0
  for (const element of A) {
    frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    if (frequencyMap[element] > Math.floor(A.length / 2)) {
      leader = element;
      leaderCount = frequencyMap[element];
    }
  }
  let leftCount = 0
  let equiLeaders = 0
  for (let i = 0; i < A.length; i++) {
    if (leader === A[i]) {
      leftCount++;
    }
    let leftSize = i + 1
    let rightSize = A.length - leftSize
    let rightCount = leaderCount - leftCount
    if (leftCount > leftSize / 2 && rightCount > rightSize / 2) {
      equiLeaders++;
    }
  }
  return equiLeaders;
}
console.log(solution([4, 3, 4, 4, 4, 2]))