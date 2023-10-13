function dragonOfLoowater(dragonHead: number[], knightHeight: number[]): number | string {
  const sortKnightHeight = knightHeight.sort();
  const sortDragonHead = dragonHead.sort();
  let minimal = 0;

  for (let i = 0; i < sortDragonHead.length; i++) {
    let j = 0;
    while (j < sortKnightHeight.length && sortKnightHeight[j] < sortDragonHead[i]) {
      j++;
    }

    if (j < sortKnightHeight.length) {
      minimal += sortKnightHeight.splice(j, 1)[0];
    } else {
      return 'knight fall';
    }
  }

  return minimal;
}

console.log(dragonOfLoowater([5, 4], [7, 8, 4])); // 11
console.log(dragonOfLoowater([5, 10], [5])); // knight fall
console.log(dragonOfLoowater([7, 2], [4, 3, 1, 2])); // knight fall
console.log(dragonOfLoowater([7, 2], [2, 1, 8, 5])); // 10

export default dragonOfLoowater;
