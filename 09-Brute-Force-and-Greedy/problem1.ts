function simpleEquations(a: number, b: number, c: number): string {
  for (let i = 1; i <= a; i++) {
    for (let j = 1; j <= b; j++) {
      for (let k = 1; k <= c; k++) {
        if (i + j + k === a && i * j * k === b && i ** 2 + j ** 2 + k ** 2 === c) {
          return `${i} ${j} ${k}`;
        }
      }
    }
  }

  return `no solution`;
}

console.log(simpleEquations(1, 2, 3)); // no solution
console.log(simpleEquations(6, 6, 14)); // 1 2 3

export default simpleEquations;
