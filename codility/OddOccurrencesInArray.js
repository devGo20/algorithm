function solution(A) {
  // 배열 요소의 등장 횟수를 계산하는 함수
  function getCount(array) {
    return array.reduce((pv, cv) => {
      pv[cv] = (pv[cv] || 0) + 1; // 각 값의 개수를 카운트
      return pv;
    }, {});
  }
  const counts = getCount(A);

  const oddKeys = Object.entries(counts)
    .filter(([key, value]) => value % 2 !== 0)
    .map(([key]) => parseInt(key));

  return oddKeys.length > 0 ? oddKeys[0] : 0;
}


// 테스트
console.log(solution([9, 3, 9, 3, 9, 7, 9])); // 7


console.log(solution([9, 3, 9, 3, 9, 7, 9])); // [9]