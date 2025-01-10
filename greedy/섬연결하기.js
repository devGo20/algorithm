// https://school.programmers.co.kr/learn/courses/30/lessons/42861
function solution(n, costs) {
  var answer = 0;
  let graph = Array(n).fill().map(() => []);
  // 그래프 만들기
  costs.forEach(([from, to, cost]) => {
    graph[from].push([to, cost]);
    graph[to].push([from, cost]);
  });
  // 방문 여부 배열
  const visited = Array(n).fill(false)
  minHeap = [[0, 0]]
  while (minHeap.length > 0) {
    // cost 적은 순으로 정렬
    minHeap.sort((a, b) => a[1] - b[1])
    const [node, cost] = minHeap.shift()

    if (visited[node]) continue
    visited[node] = true

    answer += cost
    // 연결된 노드 heap push
    graph[node].forEach(([neighbor, neighborCost]) => {
      // 이미 방문한 경우 넣지 않음
      if (!visited[neighbor]) minHeap.push([neighbor, neighborCost])
    })
  }
  return answer;
}

console.log(solution(4,
  [[0, 1, 1], [0, 2, 2], [1, 2, 5], [1, 3, 1], [2, 3, 8]]
)); 
