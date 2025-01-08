//https://school.programmers.co.kr/learn/courses/30/lessons/42586?language=javascript
function solution(progresses, speeds) {
  let needTime = []

  for (let i = 0; i < progresses.length; i++) {
    needTime[i] = Math.ceil((100 - progresses[i]) / speeds[i])
  }
  const answer = []
  let processCnt = 1
  let deployDay = needTime[0]

  for (i = 1; i < needTime.length; i++) {
    if (needTime[i] <= deployDay) {
      processCnt++
    } else {
      answer.push(processCnt)
      processCnt = 1
      deployDay = needTime[i]
    }
  }
  answer.push(processCnt)

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]))
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]))