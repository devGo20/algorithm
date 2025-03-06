function solution(id_list, report, k) {
  let answer = [];
  const reportMap = new Map();
  for (let i = 0; i < id_list.length; i++) {
    let id = id_list[i];

    if (!reportMap.has(id)) {
      reportMap.set(id, { 신고당한사람: [], 신고한사람: [] });
    }
  }
  for (let rep of report) {
    const [신고자, 피신고자] = rep.split(' ');
    reportMap.get(신고자).신고한사람.push(피신고자);
    if (!reportMap.get(피신고자).신고당한사람.includes(신고자)) {
      reportMap.get(피신고자).신고당한사람.push(신고자);
    }
  }


  for (let [id, info] of reportMap.entries()) {
    const count = info.신고한사람.reduce((acc, name) => acc + (bannedUsers.includes(name) ? 1 : 0), 0);
    answer.push(count);
  }
  return answer;
}
function solution(id_list, report, k) {
  const reportMap = new Map();

  id_list.forEach(id => reportMap.set(id, { 신고한: new Set(), 신고당한: 0 }));

  // 중복 신고 제거 및 신고 처리
  new Set(report).forEach(rep => {
    const [신고자, 피신고자] = rep.split(' ');
    if (!reportMap.get(신고자).신고한.has(피신고자)) {
      reportMap.get(신고자).신고한.add(피신고자);
      reportMap.get(피신고자).신고당한 += 1;
    }
  });

  // 정지된 유저 목록 생성
  const bannedUsers = new Set(
    id_list.filter(id => reportMap.get(id).신고당한 >= k)
  );

  return id_list.map(id =>
    [...reportMap.get(id).신고한].filter(name => bannedUsers.has(name)).length
  );
}

console.log(solution(["muzi", "frodo", "apeach", "neo"],
  ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  2))