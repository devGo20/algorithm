// https://school.programmers.co.kr/learn/courses/30/lessons/1844
function solution(maps) {
  let x = maps[0].length
  let y = maps.length
  const visited = Array(y) // 행 개수만큼 배열 생성
    .fill(0) // 각 행을 0으로 채움
    .map(() => Array(x).fill(false)); // 각 열 false로 채움
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  const queue = [[0, 0, 1]]
  visited[0][0] = true

  while (queue.length > 0) {
    const [ny, nx, curDist] = queue.shift()
    if (nx === x - 1 && ny === y - 1) { return curDist }

    for (const [dy, dx] of directions) {
      const newX = nx + dx
      const newY = ny + dy
      if (newX >= 0 && newX < x && newY >= 0 && newY < y && !visited[newY][newX] &&
        maps[newY][newX] === 1) {
        visited[newY][newX] = true
        queue.push([newY, newX, curDist + 1])
      }
    }
  }
  return -1;
}

console.log(solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]]))