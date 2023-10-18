function fiboTopDown(n: number): number {
  let count = 0;
  let memo: number[] = [];

  count++;

  if (memo[n]) {
    return memo[n];
  }

  if (n <= 1) {
    memo[n] = n;
  } else {
    memo[n] = fiboTopDown(n - 1) + fiboTopDown(n - 2);
  }
  return memo[n];
}

console.log(fiboTopDown(0)); // 0
console.log(fiboTopDown(1)); // 1
console.log(fiboTopDown(2)); // 1
console.log(fiboTopDown(3)); // 2
console.log(fiboTopDown(5)); // 5
console.log(fiboTopDown(6)); // 8
console.log(fiboTopDown(7)); // 13
console.log(fiboTopDown(9)); // 13
console.log(fiboTopDown(10)); // 55

export default fiboTopDown;
