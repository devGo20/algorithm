// https://app.codility.com/c/run/trainingTCBZPX-5MC/
function solution(N, A) {
  let answer = new Array(N).fill(0);
  let max = 0;        // 카운터의 최대값
  let lastUpdateMax = 0;  // "최대 카운터"가 마지막으로 호출된 시점의 max 값

  for (let num of A) {
    if (num > N) {
      lastUpdateMax = max;  // 최대 카운터 호출 시 max 값을 기록
    } else {
      if (answer[num - 1] < lastUpdateMax) {
        answer[num - 1] = lastUpdateMax;  // 최대 카운터보다 작은 값은 갱신
      }
      answer[num - 1] += 1;
      max = Math.max(max, answer[num - 1]);  // 최대값을 갱신
    }
  }

  // 마지막에 각 카운터가 최소 lastUpdateMax보다 작은 경우를 모두 lastUpdateMax로 갱신
  for (let i = 0; i < N; i++) {
    if (answer[i] < lastUpdateMax) {
      answer[i] = lastUpdateMax;
    }
  }

  return answer;
}
