// https://school.programmers.co.kr/learn/courses/30/lessons/42583
function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridge = Array(bridge_length).fill(0); // 다리의 트럭 상태
  let totalWeight = 0; // 다리 위의 총 무게

  while (truck_weights.length > 0 || totalWeight > 0) {
    time++;
    console.log(bridge)
    totalWeight -= bridge.shift()

    if (truck_weights.length > 0 && totalWeight + truck_weights[0] <= weight) {
      let truck = truck_weights.shift()
      bridge.push(truck);
      totalWeight += truck;
    } else {
      bridge.push(0);
    }

  }
  return time;
}

console.log(solution(2, 10, [7, 4, 5, 6])); // 8