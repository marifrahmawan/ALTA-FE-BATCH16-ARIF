function compareString(a: string, b: string): string | undefined {
  let commonSubstring = '';
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      let k = 0;
      while (a[i + k] === b[j + k]) {
        k++;
      }
      if (k > commonSubstring.length) {
        return commonSubstring = a.slice(i, i + k);
      } else {
        return 'Not Common';
      }
    }
  }
}

console.log(compareString('AKA', 'AKASHI')); // AKA
console.log(compareString('KANGAROO', 'KANG')); // KANG
console.log(compareString('KI', 'KIJANG')); // KI
console.log(compareString('KUPU-KUPU', 'KUPU')); // KUPU
console.log(compareString('ILALANG', 'ILA')); // ILA

export default compareString;
