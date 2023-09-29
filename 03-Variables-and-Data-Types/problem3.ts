const promptOnNode = require('prompt-sync')();
console.log(`Unit Choice : \n 1. Celcius\n 2. Fahrenheit\n 3. Kelvin\n`);
const unit = promptOnNode(`Enter Unit Choice : `);
const temperature = promptOnNode('Enter temperature number: ');

const celciusToFahrenheit = (+temperature * 9) / 5 + 32;
const celciusToKelvin = +temperature + 273.15;

const fahrenheitToCelcius = (+temperature - 32) * (5 / 9);
const fahrenheitToKelvin = (+temperature + 459.67) * (5 / 9);

const kelvinToCelcius = +temperature - 273.15;
const kelvinToFahrenheit = ((+temperature - 273.15) * 9) / 5 + 32;

switch (unit) {
  case '1':
    console.log(`${temperature} Celcius is equal to ${celciusToFahrenheit} Fahrenheit and ${celciusToKelvin} Kelvin`);
    break;
  case '2':
    console.log(
      `${temperature} Fahrenheit is equal to ${fahrenheitToCelcius.toFixed(4)} Celcius and ${fahrenheitToKelvin.toFixed(
        4
      )} Kelvin`
    );
    break;
  case '3':
    console.log(
      `${temperature} Kelvin is equal to ${kelvinToCelcius.toFixed(4)} Celcius and ${kelvinToFahrenheit.toFixed(
        4
      )} Fahrenheit`
    );
    break;
  default:
    console.log('Chose unit 1 to 3');
    break;
}
