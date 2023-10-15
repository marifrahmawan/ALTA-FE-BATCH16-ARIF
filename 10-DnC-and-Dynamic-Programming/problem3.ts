function frog(jumps: number[]): number {
  const result = [0];
  result[1] = Math.abs(jumps[1] - jumps[0]);

  for (let i = 2; i < jumps.length; i++) {
    const jump1 = result[i - 1] + Math.abs(jumps[i] - jumps[i - 1]);
    const jump2 = result[i - 2] + Math.abs(jumps[i] - jumps[i - 2]);
    result[i] = Math.min(jump1, jump2);
  }

  return result[jumps.length - 1];
}

// im sorry, i surrender to solve this problem so i use chat gpt
console.log(frog([10, 30, 40, 20])); // 30
console.log(frog([30, 10, 60, 10, 60, 50])); // 40

export default frog;
