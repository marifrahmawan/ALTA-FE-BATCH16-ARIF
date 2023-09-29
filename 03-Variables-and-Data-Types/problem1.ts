const Problem1 = () => {
  const promptOnNode = require('prompt-sync')();

  const firstName = promptOnNode('Enter youre first name: ');
  const lastName = promptOnNode('Enter youre last name: ');
  const age = promptOnNode('Enter your born year: ');

  return console.log(`Hello ${firstName} ${lastName}! You are ${new Date().getFullYear() - age}`);
};

Problem1();
