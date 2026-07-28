const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let a = null;
let b = null;
let c = null;
rl.on("line", (input) => {
  if (a === null) {
    a = Number(input);
    return;
  }
  if (b === null) {
    b = Number(input);
    return;
  }
  if (c === null) {
    c = Number(input);
    rl.close();
    return;
  }
});

rl.on("close", () => {
  const d = a + b / 3 - c / 3;
  console.log(Math.max(Math.ceil(d), 0));
});
