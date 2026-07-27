const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = null;
let apps;

rl.on("line", (input) => {
  if (n === null) {
    n = Number.parseInt(input);
    return;
  }

  apps = input.split(" ").map((char) => Number.parseInt(char));

  rl.close();
});

rl.on("close", () => {
  solve(apps);
});

function solve(apps) {
  const hourConsumption = apps.reduce((prev, curr) => prev + curr, 0);
  const hourCountFloat = 100 / hourConsumption;
  const hourCountFloored = Math.floor(hourCountFloat);
  console.log(hourCountFloored);
}
