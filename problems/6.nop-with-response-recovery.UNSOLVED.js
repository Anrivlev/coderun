const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputLines = [];
rl.on('line', (input) => {
    inputLines.push(input.split(' ').map(char => Number(char)));
    /*
    Пример ввода и вывода числа n, где -10^9 < n < 10^9:
    const n = parseInt(input);
    console.log(n);
    */
    if (inputLines.length === 4)
    rl.close();
});

rl.on('close', () => {
    const N = inputLines[0][0];
    const M = inputLines[2][0];
    const xSequence = inputLines[1];
    const ySequence = inputLines[3];
})