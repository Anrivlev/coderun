const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let i = 0;
let mode = "n";

let maxValue = -Infinity;

rl.on("line", (input) => {
  switch (mode) {
    case "n": {
      n = Number.parseInt(input, 10);
      mode = "a";
      break;
    }
    case "a": {
      if (i === n) {
        rl.close();
        break;
      }
      const ai = Number.parseInt(input, 10);
      if (ai !== maxValue) {
        maxValue = ai;
        console.log(ai);
      }

      i += 1;
      break;
    }
  }
});

rl.on("close", () => {
  process.exit(0);
});
