function primaSegiEmpat(wide: number, high: number, start: number): void {
  let primeNumber: number[] = [];

  const isPrime = (a: number) => {
    if (a <= 1) return false;
    if (a <= 3) return true;

    for (let i = 2; i <= Math.sqrt(a); i++) {
      if (a % i === 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < 100; i++) {
    if (isPrime(i)) {
      primeNumber.push(i);
    }
  }

  let temp: number[] = [];

  if (start > 1) {
    temp = primeNumber.slice(wide * high, start - 1);
  } else {
    temp = primeNumber.slice(0, wide * high);
  }

  for (let i = 0; i < high; i++) {
    let primeRect = '';
    for (let j = 0; j < wide; j++) {
      primeRect += temp[i * wide + j] + ' ';
    }
    console.log(primeRect);
  }

  console.log(temp.reduce((acc, currVal) => acc + currVal, 0));
}

console.log(primaSegiEmpat(2, 3, 13));
/*
17 19
23 29
31 37
156
*/
console.log(primaSegiEmpat(5, 2, 1));
/*
2  3  5  7 11
13 17 19 23 29
129
*/

export default primaSegiEmpat;
