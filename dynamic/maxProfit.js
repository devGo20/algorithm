function solution(A) {
  let 매수 = 0;
  let maxProfit = 0;

  for (let 매도 = 1; 매도 < A.length; 매도++) {
    let profit = A[매도] - A[매수];

    maxProfit = Math.max(maxProfit, profit);

    if (A[매도] < A[매수]) {
      매수 = 매도;
    }
  }

  return maxProfit;
}
