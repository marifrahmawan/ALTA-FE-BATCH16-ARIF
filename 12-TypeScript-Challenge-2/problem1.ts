function pairSum(arr: number[], target: number): number[] {
  let result: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    while (j < arr.length) {
      if (arr[i] + arr[j] === target) {
        result.push(i, j);
      }
      j++;
    }
  }

  return result;
}

console.log(pairSum([1, 2, 3, 4, 6], 6)); // [1, 3]
console.log(pairSum([2, 5, 9, 11], 11)); // [0, 2]
console.log(pairSum([1, 3, 5, 7], 12)); // [2, 3]
console.log(pairSum([1, 4, 6, 8], 10)); // [1, 2]
console.log(pairSum([1, 5, 6, 7], 6)); // [0, 1]

export default pairSum;
