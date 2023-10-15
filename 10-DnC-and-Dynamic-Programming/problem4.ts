function romanNumerals(value: number): string {
  interface romanNumber {
    decimal: number;
    roman: string;
  }

  const romantNumbers: romanNumber[] = [
    { decimal: 1000, roman: 'M' },
    { decimal: 900, roman: 'CM' },
    { decimal: 500, roman: 'D' },
    { decimal: 400, roman: 'CD' },
    { decimal: 100, roman: 'C' },
    { decimal: 90, roman: 'XC' },
    { decimal: 50, roman: 'L' },
    { decimal: 40, roman: 'XL' },
    { decimal: 10, roman: 'X' },
    { decimal: 9, roman: 'IX' },
    { decimal: 5, roman: 'V' },
    { decimal: 4, roman: 'IV' },
    { decimal: 1, roman: 'I' },
  ];

  let result = '';

  for (let i = 0; i < romantNumbers.length; i++) {
    while (value >= romantNumbers[i].decimal) {
      result += romantNumbers[i].roman;
      value -= romantNumbers[i].decimal;
    }
  }

  return result;
}

console.log(romanNumerals(6)); // VI
console.log(romanNumerals(9)); // IX
console.log(romanNumerals(23)); // XXIII
console.log(romanNumerals(2021)); // MMXXI
console.log(romanNumerals(1646)); // MDCXLVI

export default romanNumerals;
