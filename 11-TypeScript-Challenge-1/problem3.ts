function findMinAndMax(arr: number[]): string {
  let indexMin = 0;
  let indexMax = 0;
  const sortArr = [...arr].sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (sortArr[0] === arr[i]) {
      indexMin = i;
    }

    if (sortArr[sortArr.length - 1] === arr[i]) {
      indexMax = i;
    }
  }

  return `min: ${sortArr[0]} index: ${indexMin} max: ${sortArr[sortArr.length - 1]} index: ${indexMax}`;
}

console.log(findMinAndMax([5, 7, 4, -2, -1, 8])); // min: -2 index: 3 max: 8 index: 5
console.log(findMinAndMax([2, -5, -4, 22, 7, 7])); // min: -5 index: 1 max: 22 index: 3
console.log(findMinAndMax([4, 3, 9, 4, -21, 7])); // min: -21 index: 4 max: 9 index: 2
console.log(findMinAndMax([-1, 5, 6, 4, 2, 18])); // min: -1 index: 0 max: 18 index: 5
console.log(findMinAndMax([-2, 5, -7, 4, 7, -20])); // min: -20 index: 5 max: 7 index: 4

export default findMinAndMax;
