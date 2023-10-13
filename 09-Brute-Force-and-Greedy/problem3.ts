function isPangram(texts: string): boolean {
  const compare: string[] = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  const arrayText = texts.toLowerCase().split(' ').join('').split('').sort();
  const arrayTextRemoveDuplicate: string[] = [...new Set(arrayText)];

  if (JSON.stringify(arrayTextRemoveDuplicate) === JSON.stringify(compare)) {
    return true;
  }

  return false;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog')); // true
console.log(isPangram('Public junk dwarves hug my beloved pillow')); // false
console.log(isPangram('Jim quickly realized that the beautiful gowns are expensive')); //true
console.log(isPangram('Back in June we delivered oxygen equipment')); // false

export default isPangram;
