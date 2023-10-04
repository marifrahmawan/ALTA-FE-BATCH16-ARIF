function meanMedian(numbers: number[]): string {
  const mean = (numbers: number[]) => {
    return numbers.reduce((acc: number, currVal: number) => acc + currVal, 0) / numbers.length;
  };

  const median = (numbers: number[]) => {
    if (numbers.length % 2 === 0) {
      let median1 = numbers[numbers.length / 2];
      let median2 = numbers[numbers.length / 2 - 1];

      return (median1 + median2) / 2;
    } else {
      return numbers[Math.floor(numbers.length / 2)];
    }
  };

  return `${mean(numbers)} ${median(numbers)}`;
}

console.log(meanMedian([1, 2, 3, 4])); // 2.5 2.5
console.log(meanMedian([1, 2, 3, 4, 5])); // 3 3
console.log(meanMedian([7, 8, 9, 13, 15])); // 10.4 9
console.log(meanMedian([10, 20, 30, 40, 50])); // 30 30
console.log(meanMedian([15, 20, 30, 60, 120])); // 49 30

export default meanMedian;
