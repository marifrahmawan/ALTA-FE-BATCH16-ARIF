function playWithAsterik(n: number): void {
  for (let i = 0; i < n; i++) {
    let result = '';
    for (let j = n; j > i; j--) {
      result += ' ';
    }

    for (let k = 0; k <= i; k++) {
      result += '* ';
    }
    console.log(result);
  }
}

console.log(playWithAsterik(5));

export default playWithAsterik;
