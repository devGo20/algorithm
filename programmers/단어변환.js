// https://school.programmers.co.kr/learn/courses/30/lessons/43163
function solution(begin, target, words) {
  if (!words.includes(target)) {
    return 0
  }
  const queue = [[begin, 0]]
  const visited = new Set();

  while (queue.length > 0) {
    console.log(queue)
    const [currentWord, depth] = queue.shift();
    if (currentWord === target) {
      return depth;
    }
    for (const word of words) {
      if (!visited.has(word) && canTransForm(currentWord, word)) {
        queue.push([word, depth + 1])
        visited.add(word);
      }
    }
  }
  return 0;
}
// 교환 가능한지 확인하는 함수
const canTransForm = (word1, word2) => {
  let count = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      count++;
    }
    if (count > 1) {
      return false;
    }
  }
  return true;
}
const begin = "hit";
const target = "cog";
const words = ["hot", "dot", "dog", "lot", "log", "cog"];

console.log(solution(begin, target, words));