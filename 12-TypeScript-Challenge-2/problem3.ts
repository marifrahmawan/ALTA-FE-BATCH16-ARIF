function makeDiamond(char: string): void {
  const INITIAL_ASCII_CAPITAL = 65;
  const CHAR_ASCII_CODE = char.charCodeAt(0);
  const charN = CHAR_ASCII_CODE - INITIAL_ASCII_CAPITAL + 1;

  for (let i = 0; i < charN; i++) {
    let result = '';

    for (let j = charN - 1; j > i; j--) {
      result += '·';
    }

    for (let k = 0; k <= 2 * i; k++) {
      if (i === 1 && k === 0) {
        result += String.fromCharCode(INITIAL_ASCII_CAPITAL + i);
      } else if (k === 2 * i || k == 0) {
        result += String.fromCharCode(INITIAL_ASCII_CAPITAL + i);
      } else {
        result += '·';
      }
    }

    for (let l = charN - 1; l > i; l--) {
      result += '·';
    }

    console.log(result);
  }

  for (let i = 0; i < charN - 1; i++) {
    let result = '';

    for (let j = 0; j < i + 1; j++) {
      result += '·';
    }

    for (let k = 1; k < 2 * (charN - 1 - i); k++) {
      if (k === 1) {
        result += String.fromCharCode(CHAR_ASCII_CODE - 1 - i);
      } else if (k === 2 * (charN - 1 - i) - 1) {
        result += String.fromCharCode(CHAR_ASCII_CODE - 1 - i);
      } else {
        result += '·';
      }
    }

    for (let l = 0; l < i + 1; l++) {
      result += '·';
    }

    console.log(result);
  }
}

makeDiamond('C');
makeDiamond('E');

export default makeDiamond;
