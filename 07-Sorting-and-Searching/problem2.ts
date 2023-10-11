function playingDomino(cards: number[][], deck: number[]): number[] {
  const temp = [];
  for (let i = 0; i < cards.length; i++) {
    for (let j = 0; j < deck.length; j++) {
      if (cards[i][j] === deck[0] || cards[i][j] === deck[1]) {
        temp.push(cards[i]);
      }
    }
  }

  if (temp.length === 0) {
    return [];
  } else {
    return temp[0];
  }
}

console.log(
  playingDomino(
    [
      [6, 5],
      [3, 4],
      [2, 1],
      [3, 3],
    ],
    [4, 3]
  )
); // [3, 4]
console.log(
  playingDomino(
    [
      [6, 5],
      [3, 3],
      [3, 4],
      [2, 1],
    ],
    [3, 6]
  )
); // [6 5]
console.log(
  playingDomino(
    [
      [6, 6],
      [2, 4],
      [3, 6],
    ],
    [5, 1]
  )
); // []

export default playingDomino;
