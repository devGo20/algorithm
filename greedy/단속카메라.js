function solution(routes) {
  routes.sort((a, b) => a[1] - b[1])
  console.log(routes)
  let camera = [routes[0][1]]
  for (let i = 1; i < routes.length; i++) {
    if (routes[i - 1][1] >= routes[i][0] && camera.some(value => value >= routes[i][0] && value <= routes[i][1])) {
      continue
    } else {
      camera.push(routes[i][1])
    }
  }
  return camera.length;
}

console.log(solution([[-20, -15], [-14, -5], [-18, -13], [-5, -3]])) // 2