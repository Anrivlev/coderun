const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let a;
let b;
let c;
rl.on("line", (input) => {
  [a, b, c] = input.split(" ").map((char) => Number(char));
  /*
    Пример ввода и вывода числа n, где -10^9 < n < 10^9:
    const n = parseInt(input);
    console.log(n);
    */

  rl.close();
});

rl.on("close", () => {
  const D = b * b - 4 * a * c;
  if (D < 0) {
    console.log(0);
    return;
  }
  if (D === 0) {
    const x1 = -b / (2 * a);
    console.log(1);
    console.log(x1);
  }
  if (D > 0) {
    const x1 = (-b - Math.sqrt(D)) / (2 * a);
    const x2 = (-b + Math.sqrt(D)) / (2 * a);
    console.log(2);
    console.log(x1, x2);
  }
});
