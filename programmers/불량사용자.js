function solution(user_id, banned_id) {
  var answer = 0;
  let bannedPossible = []

  for (const ban_id of banned_id) {
    let pattern = new RegExp('^' + ban_id.replaceAll('*', '.') + '$');
    bannedPossible.push(user_id.filter(word => pattern.test(word)));
  }
  const getAllCombinations = (data) => { const results = new Set(); const helper = (path, index) => { if (index === data.length) { const sortedPath = path.slice().sort(); results.add(sortedPath.join(' ')); return; } for (let i = 0; i < data[index].length; i++) { if (!path.includes(data[index][i])) { helper([...path, data[index][i]], index + 1); } } }; helper([], 0); return Array.from(results); };
  return getAllCombinations(bannedPossible).length;
}
