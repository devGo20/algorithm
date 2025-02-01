function solution(wallpaper) {
  let top = Infinity, left = Infinity, bottom = -1, right = -1;

  wallpaper.forEach((row, i) => {
    row.split('').forEach((cell, j) => {
      if (cell === "#") {
        top = Math.min(top, i);
        left = Math.min(left, j);
        bottom = Math.max(bottom, i + 1);
        right = Math.max(right, j + 1);
      }
    });
  });

  return [top, left, bottom, right];
}


console.log(solution(
  [".##...##.",
    "#..#.#..#",
    "#...#...#",
    ".#.....#.",
    "..#...#..",
    "...#.#...",
    "....#...."]
))