function solution(s) {
  let splitS = s.split(' ').map((word) => {
    word = word.toLowerCase();
    if (isNaN(word[0]) && word.length > 0) {
      word = word[0].toUpperCase() + word.slice(1);
    }
    return word;
  });


  return splitS.join(' ');
}