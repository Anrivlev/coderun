const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null;
let sequence;
rl.on("line", (input) => {
  if (N === null) {
    N = Number(input);
    return;
  }

  sequence = input.split(" ").map((char) => Number(char));
  /*
    Пример ввода и вывода числа n, где -10^9 < n < 10^9:
    const n = parseInt(input);
    console.log(n);
    */

  rl.close();
});

rl.on("close", () => {
  const extraCharacters = [];

  let j = sequence.length - 1;
  let palindromeStartIndex = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] === sequence[j]) {
      if (i === j) break;
      j--;
    } else {
      j = sequence.length - 1;
      i = palindromeStartIndex;
      palindromeStartIndex = i + 1;
    }
  }

  for (let i = 0; i < palindromeStartIndex; i++) {
    extraCharacters.push(sequence[i]);
  }

  console.log(extraCharacters.length);
  console.log(...extraCharacters.reverse());
});
