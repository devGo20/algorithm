function solution(park, routes) {
  const H = park.length;
  const W = park[0].length;
  let x = 0;
  let y = 0;

  // 시작 위치 찾기
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (park[i][j] === 'S') {
        y = i;
        x = j;
      }
    }
  }

  for (let route of routes) {
    const [direction, distanceStr] = route.split(' ');
    const distance = parseInt(distanceStr);

    let nx = x;
    let ny = y;
    let canMove = true;

    // 한 칸씩 이동하면서 확인
    for (let i = 0; i < distance; i++) {
      if (direction === 'E') nx++;
      if (direction === 'W') nx--;
      if (direction === 'S') ny++;
      if (direction === 'N') ny--;

      // 범위를 벗어나거나 장애물을 만난 경우
      if (nx < 0 || nx >= W || ny < 0 || ny >= H || park[ny][nx] === 'X') {
        canMove = false;
        break;
      }
    }

    // 이동이 가능한 경우에만 위치 업데이트
    if (canMove) {
      x = nx;
      y = ny;
    }
  }

  return [y, x];
}
console.log(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"]))
console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"]))