function solution(n, works) {
  if (works.reduce((a, b) => a + b) <= n) return 0;

  works.sort((a, b) => b - a);

  while (n > 0) {
    const max = works[0];

    // 최댓값을 가진 요소들 모두 처리
    let i = 0;
    while (i < works.length && works[i] === max) {
      if (n > 0) {
        works[i]--;
        n--;
      }
      i++;
    }

    works.sort((a, b) => b - a);
  }

  return works.reduce((sum, work) => sum + work * work, 0);
}