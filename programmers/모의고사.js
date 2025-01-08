function solution(answers) {
  var answer = [];
  let patterns = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
  const correctCounts = Array(3).fill(0);
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === patterns[0][i % patterns[0].length]) correctCounts[0]++;
    if (answers[i] === patterns[1][i % patterns[1].length]) correctCounts[1]++;
    if (answers[i] === patterns[2][i % patterns[2].length]) correctCounts[2]++;
  }

  let maxCount = Math.max(...correctCounts);
  for (let i = 0; i < correctCounts.length; i++) {
    if (correctCounts[i] === maxCount) answer.push(i + 1);
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5])); // [1]