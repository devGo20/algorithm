// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(H) {
  let blocks = 0
  let stack = []
  for (let height of H) {
    while (stack.length !== 0 && stack[stack.length - 1] > height) {
      stack.pop()
    }
    if (stack.length === 0 || stack[stack.length - 1] < height) {
      stack.push(height)
      blocks += 1
    }
  }
  return blocks;
}
let H = []
H[0] = 8
H[1] = 8
H[2] = 5
H[3] = 7
H[4] = 9
H[5] = 8
H[6] = 7
H[7] = 4
H[8] = 8
console.log(solution(H));