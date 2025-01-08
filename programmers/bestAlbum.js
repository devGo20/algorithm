// https://school.programmers.co.kr/learn/courses/30/lessons/42579
function solution(genres, plays) {
  const genreTotalPlayCnt = {}
  const genreSongs = {}

  // 1 각 장르별 총 재생 횟수, 곡 정보 저장
  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i]
    const playCount = plays[i]

    genreTotalPlayCnt[genre] = (genreTotalPlayCnt[genre] || 0) + playCount

    if (!genreSongs[genre]) {
      genreSongs[genre] = []
    }
    genreSongs[genre].push({ index: i, playCount })
  }

  // 2 장르별 재생 횟수 기준으로 곡 정렬
  for (const genre in genreSongs) {
    genreSongs[genre].sort((a, b) => b.playCount - a.playCount)
  }

  // 3 장르별 총 재생 횟수 기준으로 genreTotalPlayCnt 정렬
  const sortedGenresPlayCnt = Object.keys(genreTotalPlayCnt).sort((a, b) => genreTotalPlayCnt[b] - genreTotalPlayCnt[a])

  // 4 결과 배열 생성
  const answer = []
  for (const genre of sortedGenresPlayCnt) {
    const songs = genreSongs[genre]
    answer.push(songs[0].index)
    if (songs.length > 1) {
      answer.push(songs[1].index)
    }
  }

  return answer
}

console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]))