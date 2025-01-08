// https://school.programmers.co.kr/learn/courses/30/lessons/42839?language=javascript
// 조합 함수
function getAllPermutations(arr) {
  const results = [];

  function permute(current, remaining) {
    // 현재 조합 저장 (빈 배열 제외)
    if (current.length > 0) {
      results.push(current);
    }

    for (let i = 0; i < remaining.length; i++) {
      permute([...current, remaining[i]], [...remaining.slice(0, i), ...remaining.slice(i + 1)]);
    }
  }

  permute([], arr);
  let answer = new Set(results)
  return [...answer];
}


// 소수 확인 함수
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(numbers) {
  let answer = new Set()
  let convertArr = numbers.split('').map(Number)
  let perm = getAllPermutations(convertArr)
  for (let i = 0; i < perm.length; i++) {
    let num = Number(perm[i].join(''))
    if (isPrime(num)) {
      answer.add(num);
    }
  }
  return answer.size;
}

console.log(solution("011"))