function solution(video_len, pos, op_start, op_end, commands) {
  function timeToMinutes(time) {
    const [hour, minute] = time.split(":").map((t) => parseInt(t));
    return hour * 60 + minute;
  }

  function minutesToTime(minutes) {
    const hour = Math.floor(minutes / 60);
    const minute = minutes % 60;
    return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
  }

  const video_end = timeToMinutes(video_len);
  let current_pos = timeToMinutes(pos);
  const op_start_pos = timeToMinutes(op_start);
  const op_end_pos = timeToMinutes(op_end);
  current_pos = adjustPosition(current_pos, op_start_pos, op_end_pos);
  for (let command of commands) {
    if (command === "next") {
      current_pos += 10
      if (current_pos >= video_end) {
        current_pos = video_end
      }
    } else {
      current_pos -= 10
      if (current_pos < 0) {
        current_pos = 0
      }
    }
    current_pos = adjustPosition(current_pos, op_start_pos, op_end_pos);
  }
  return minutesToTime(current_pos);
}
function adjustPosition(pos, start, end) {
  if (pos >= start && pos <= end) {
    return end;
  }
  return pos;
}

// console.log(solution("34:33", "13:00", "00:55", "02:55", ["next", "prev"])) //"13:00"

// console.log(solution("10:55", "00:05", "00:15", "06:55", ["prev", "next", "next"])) //"06:55"
// console.log(solution("07:22", "04:05", "00:15", "04:07", ["next"]))
console.log(solution("10:00", "00:03", "00:00", "00:05", ["prev", "next"]))
