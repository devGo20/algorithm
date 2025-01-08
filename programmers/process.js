// https://school.programmers.co.kr/learn/courses/30/lessons/42587?language=javascript
function solution(priorities, location) {
  let queue = priorities.map((priority, index) => [priority, index]);
  let count = 0;

  while (queue.length > 0) {
    let maxPriority = Math.max(...queue.map((item) => item[0]))
    let currentProcess = queue.shift()

    if (currentProcess[0] === maxPriority) {
      count++
      if (currentProcess[1] === location) {
        return count
      }
    } else {
      queue.push(currentProcess)
    }
  }
}

console.log(solution([2, 1, 3, 2], 2))