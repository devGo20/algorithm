function solution(lines) {
  var answer = 0;
  let minStart = Math.min(...lines.map(line => line[0]));
  let maxEnd = Math.max(...lines.map(line => line[1]));
  let parallel = Array(maxEnd - minStart).fill(0);
  for (const line of lines) {
    for (let i = line[0]; i < line[1]; i++) {
      parallel[i - minStart] += 1
    }
  }

  return parallel.filter(item => item > 1).length;
}