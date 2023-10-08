function primeX(number: number): number {
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

  for (let j = 0; j < 100; j++) {
    if (isPrime(j)) {
      primeNumber.push(j);
    }
  }
  
  return primeNumber[number - 1];
}

console.log(primeX(1)); // 2
console.log(primeX(5)); // 11
console.log(primeX(10)); // 29
console.log(primeX(15)); // 47
console.log(primeX(20)); // 71

export default primeX;
