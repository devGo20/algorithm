function solution(s) {
  var answer = new Set();
  let split = s.slice(2, -2).split("},{").map((item) => item.split(",").map((item) => parseInt(item)));
  split = split.sort((a, b) => a.length - b.length)
  for (let i = 0; i < split.length; i++) {
    for (let j = 0; j < split[i].length; j++) {
      if (!answer.has(split[i][j])) {
        answer.add(split[i][j])
      }
    }
  }
  return [...answer];
}