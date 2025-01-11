function solution(n) {
  var answer = 0;
  let arr = Array(n).fill(0)
  arr[0] = 0
  arr[1] = 1
  for (let i = 2; i <= n; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % 1234567
  }
  console.log(arr)
  return arr[arr.length - 1];
}