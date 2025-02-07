function solution(s, skip, index) {
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'].filter(ch => !skip.includes(ch));
  return [...s].map(ch => alphabet[(alphabet.indexOf(ch) + index) % alphabet.length]).join('');
}
console.log(solution("aukks", "wbqd", 5))