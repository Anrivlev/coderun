const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let A;
let B;
rl.on("line", (input) => {
  [A, B] = input.split(" ").map((char) => Number.parseInt(char));
  rl.close();
});

rl.on("close", () => {
  const taskCount = A + B;
  console.log(taskCount);
});
