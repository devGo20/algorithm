// 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
// 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
// 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
// 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
// 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
//      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

function solution(new_id) {
  let answer = new_id
    .toLowerCase()
    .replace(/[^a-z0-9\-_.]/g, '')  // 1단계: 허용된 문자만 남김
    .replace(/\.{2,}/g, '.')        // 2단계: 연속된 마침표(.) 하나로 축소
    .replace(/^\.|\.$/g, '');       // 3단계: 처음과 끝의 마침표 제거

  if (answer.length === 0) answer = 'a';  // 4단계: 빈 문자열이면 "a" 대입

  if (answer.length >= 16) {
    answer = answer.slice(0, 15).replace(/\.$/, ''); // 5단계: 길이 제한 후 마지막 마침표 제거
  }

  answer = answer.padEnd(3, answer[answer.length - 1]); // 6단계: 길이가 2 이하라면 마지막 문자 반복

  return answer;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"))