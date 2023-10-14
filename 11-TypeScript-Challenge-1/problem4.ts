function caesarCipher(offset: number, input: string): string {
  let cipher: string[] = [];

  for (let i = 0; i < input.length; i++) {
    let temp = input.charCodeAt(i) + offset;
    while (temp > 122) {
      temp = temp - 122 + 96;
    }
    cipher.push(String.fromCharCode(temp));
  }

  let result = cipher.map((char) => char.replace('*', ' '));

  return result.join('');
}

console.log(caesarCipher(3, 'abc')); // def
console.log(caesarCipher(2, 'alta')); // cnvc
console.log(caesarCipher(10, 'alterraacademy')); // kvdobbkkmknowi
console.log(caesarCipher(1, 'abcdefghijklmnopqrstuvwxyz')); // bcdefghijklmnopqrstuvwxyza
console.log(caesarCipher(1000, 'abcdefghijklmnopqrstuvwxyz')); // mnopqrstuvwxyzabcdefghijkl

export default caesarCipher;
