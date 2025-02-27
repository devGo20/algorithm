/**
 * Validates schedules against time logs starting from a specific day
 * @param {number[]} schedules - List of deadline times in HHMM format
 * @param {number[][]} timelogs - List of arrays containing log times in HHMM format
 * @param {number} startday - Starting day of the week (0=Sunday, 1=Monday, ..., 6=Saturday)
 * @returns {number} Count of valid schedules
 */
function solution(schedules, timelogs, startday) {
  var answer = 0;

  for (let i = 0; i < schedules.length; i++) {
    let schedule = schedules[i];
    let deadline = convertSeconds(schedule) + 10;
    let good = 0;
    for (let j = 0; j < 7; j++) {
      let ref = j + startday;
      if (ref % 7 !== 0 && ref % 7 !== 6) {
        if (deadline >= convertSeconds(timelogs[i][j])) {
          good++;
        } else {
          continue;
        }
      } else {
        continue;
      }
    }

    if (good === 5) {
      answer++;
    }
  }

  return answer;
}

function convertSeconds(str) {
  let answer = str.toString().padStart(4, '0');
  let hour = answer.slice(0, -2);
  let minute = answer.slice(-2);
  return parseInt(hour) * 60 + parseInt(minute);
}

// Test with the example
const result = solution([730, 855, 700, 720], [[710, 700, 650, 735, 700, 931, 912], [908, 901, 805, 815, 800, 831, 835], [705, 701, 702, 705, 710, 710, 711], [707, 731, 859, 913, 934, 931, 905]], 1
);

console.log(`최종 결과: ${result}`);