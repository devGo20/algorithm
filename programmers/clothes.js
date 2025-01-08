// https://school.programmers.co.kr/learn/courses/30/lessons/42578?language=javascript
function solution(clothes) {
  const groupedClothes = clothes.reduce((acc, element) => {
    const item = element[0];
    const category = element[1];

    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});
  let totalCombinations = 1;
  for (const category in groupedClothes) {
    // 각 의상 선택 경우 + 아무것도 선택하지 않은 경우  
    totalCombinations *= (groupedClothes[category].length + 1);
  }

  // 아무것도 선택하지 않는 경우 제외
  return totalCombinations - 1;
}

console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]))