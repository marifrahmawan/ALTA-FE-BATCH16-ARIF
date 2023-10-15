function fiboTopDown(n: number): number {
  // your code here
  if (n === 0 || n === 1) {
    return n;
  }

  let temp = 0;
  let sum = 0;
  let result = 1;

  let i = 1;
  while (i < n) {
    sum = temp + result;
    temp = result;
    result = sum;
    i++;
  }

  return result;
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
