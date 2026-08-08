const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputLines = [];
rl.on("line", (input) => {
  inputLines.push(input.split(" ").map((char) => Number(char)));
  /*
    Пример ввода и вывода числа n, где -10^9 < n < 10^9:
    const n = parseInt(input);
    console.log(n);
    */
  if (inputLines.length === 4) rl.close();
});

rl.on("close", () => {
  const N = inputLines[0][0];
  const M = inputLines[2][0];
  const xSequence = inputLines[1];
  const ySequence = inputLines[3];

  const maxLengths = new Array(N + 1).fill(null).map(() => new Array(M + 1).fill(0));

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      if (xSequence[i - 1] === ySequence[j - 1]) {
        maxLengths[i][j] = maxLengths[i - 1][j - 1] + 1;
      } else {
        maxLengths[i][j] = Math.max(maxLengths[i - 1][j], maxLengths[i][j - 1]);
      }
    }
  }

  const maxSubSequence = [];
  let i = N ;
  let j = M;
  while (i > 0 && j > 0) {
    if (xSequence[i - 1] === ySequence[j - 1]) {
      maxSubSequence.push(xSequence[i - 1]);
      i--;
      j--;
    } else if (maxLengths[i - 1][j]  >= maxLengths[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  console.log(maxSubSequence.reverse().join(" "));
});
