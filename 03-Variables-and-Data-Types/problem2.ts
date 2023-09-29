let T = 20;
let r = 4;
let pi = 3.14;

const LA = pi * r ** 2; // luas alas
const LPS = 2 * pi * (r * T); // luas samping
const LPT = 2 * LA + LPS; // luas permukaan tabung

console.log(LPT);
