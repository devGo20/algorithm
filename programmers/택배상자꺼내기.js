// n 상자 개수 w 가로개수 num 타겟 상자자
function solution(n, w, num) {
  var answer = 0;
  let level = 1;
  let wall = []
  let index = undefined;
  for (let i = 1; i <= n; i += w) {
    let tmp = [];
    for (let j = i; j < i + w; j++) {
      tmp.push(j > n ? NaN : j);
    }
    if (level % 2 === 0) {
      tmp.reverse()
    }
    if (tmp.includes(num)) {
      index = tmp.indexOf(num);
    }
    if (!isNaN(tmp[index]) && index !== undefined) {
      answer++;
    }
    wall.unshift(tmp);
    level++;
  }

  return answer;
}

console.log(solution(22, 6, 8)) // 4