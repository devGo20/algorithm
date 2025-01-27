function solution(players, callings) {
  const indexMap = new Map();
  players.forEach((player, idx) => indexMap.set(player, idx));
  for (let calling of callings) {
    let index = indexMap.get(calling);
    if (index < 0) {
      continue
    }
    players[index] = players[index - 1]
    players[index - 1] = calling
    indexMap.set(players[index], index);
    indexMap.set(calling, index - 1);
  }
  return players;
}
console.log(solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]));