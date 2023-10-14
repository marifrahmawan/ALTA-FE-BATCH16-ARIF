function ubahHuruf(sentence: string): string {
  let cipher: string[] = [];

  for (let i = 0; i < sentence.length; i++) {
    let temp = sentence.charCodeAt(i) + 10;
    while (temp > 90) {
      temp = temp - 90 + 64;
    }
    cipher.push(String.fromCharCode(temp));
  }

  let result = cipher.map((char) => char.replace('*', ' '));

  return result.join('');
}

console.log(ubahHuruf('SEPULSA OKE')); // COZEVCK YUO
console.log(ubahHuruf('ALTERRA ACADEMY')); // KVDOBBK KMKNOWI
console.log(ubahHuruf('INDONESIA')); // SXNYXOCSK
console.log(ubahHuruf('GOLANG')); // QYVKXQ
console.log(ubahHuruf('PROGRAMMER')); // ZBYQBKWWOB

export default ubahHuruf;
