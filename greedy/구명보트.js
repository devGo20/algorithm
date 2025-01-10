function solution(people, limit) {
  var answer = 0;
  people.sort(function (a, b) { return b - a }) // 내림차순 정렬

  let left = 0; // 가장 무거운 사람
  let right = people.length - 1; // 가장 가벼운 사람

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;  // 가장 무거운 사람을 태운다
      right--; // 가장 가벼운 사람을 태운다
    } else {
      left++;  // 가장 무거운 사람만 태운다
    }
    answer++;  // 배 출발
  }

  return answer;
}

console.log(solution([70, 50, 80, 50], 100)); // 3
