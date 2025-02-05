function solution(cards1, cards2, goal) {
  let i = 0;
  let c1 = 0, c2 = 0;

  while (i < goal.length) {
    if (cards1[c1] === goal[i]) {
      c1++;
      i++;
      continue;
    }
    if (cards2[c2] === goal[i]) {
      c2++;
      i++;
      continue;
    }
    return "No";
  }
  return "Yes";
}
console.log(solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"]))
// console.log(solution(["i", "water", "drink"], ["want", "to"], ["i", "want", "to", "drink", "water"]))