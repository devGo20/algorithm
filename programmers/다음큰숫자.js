function solution(n) {
  let binaryN = (n).toString(2)
  let nextNum = n + 1
  while (true) {
    let binaryI = nextNum.toString(2);

    let countN = (binaryN.match(/1/g) || []).length;
    let countI = (binaryI.match(/1/g) || []).length;

    if (countN === countI) {
      return nextNum;
    }
    nextNum += 1
  }
}