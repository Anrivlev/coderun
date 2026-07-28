const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numberList;

rl.on('line', (input) => {
    numberList = input.split(' ').map(char => Number(char));
    
    rl.close();
});

rl.on('close', () => {
    
})