const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCount = 0;
let n = 0;
let isFirstLine = true;
let maxLength = 0;
let currentLength = 0;

rl.on("line", (line) => {
  const input = Number(line);
  if (isFirstLine) {
    n = input;
    isFirstLine = false;
  } else {
    lineCount += 1;
    if (input === 1) {
      currentLength += 1;
      if (currentLength > maxLength) maxLength = currentLength;
    } else {
      currentLength = 0;
    }
  }
  if (lineCount === n) {
    console.log(maxLength);
    rl.close();
  }
});
