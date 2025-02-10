function solution(today, terms, privacies) {
  const answer = [];
  const todayInvert = new Date(today.replace(/\./g, '-'));
  const termMap = new Map();
  for (let term of terms) {
    termMap.set(term.split(" ")[0], parseInt(term.split(" ")[1]));
  }
  for (let [index, privacy] of privacies.entries()) {
    const [startDate, term] = privacy.split(" ");
    let date = new Date(startDate.replace(/\./g, '-'));
    date.setMonth(date.getMonth() + termMap.get(term));
    if (todayInvert.getTime() >= date.getTime()) {
      answer.push(index + 1);
    }
  }
  return answer;
}
console.log(solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]))