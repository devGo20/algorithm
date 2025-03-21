function solution(n) {
  const answer = [];

  function hanoi(n, start, mid, end) {
    console.log(answer)
    if (n === 1) {
      answer.push([start, end]);
      return;
    }
    hanoi(n - 1, start, end, mid);
    answer.push([start, end]);
    hanoi(n - 1, mid, start, end);
  }

  hanoi(n, 1, 2, 3);
  return answer;
}

console.log(solution(3));