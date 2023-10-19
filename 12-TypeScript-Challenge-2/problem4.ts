function findMaxSumSubArray(k: number, arr: number[]): number {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    let j = i;
    
    while (j < k + i) {
      temp += arr[j];

      j++;
    }

    if (temp > result) {
      result = temp;
    }
  }

  return result;
}

console.log(findMaxSumSubArray(3, [2, 1, 5, 1, 3, 2])); // 9
console.log(findMaxSumSubArray(2, [2, 3, 4, 1, 5])); // 7
console.log(findMaxSumSubArray(2, [2, 1, 4, 1, 1])); // 5
console.log(findMaxSumSubArray(3, [2, 1, 4, 1, 1])); // 7
console.log(findMaxSumSubArray(4, [2, 1, 4, 1, 1])); // 8

export default findMaxSumSubArray;
