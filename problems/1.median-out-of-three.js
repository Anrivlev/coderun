const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let a, b, c;

rl.on("line", (line) => {
  [a, b, c] = line.split(" ").map((char) => Number.parseInt(char));
  rl.close();
});

rl.on("close", () => {
  const max = Math.max(a, b, c);
  const min = Math.min(a, b, c);
  const mid = a + b + c - max - min;
  console.log(mid);
});
