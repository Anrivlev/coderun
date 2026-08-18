const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Нужно переписать на стэк, чтобы меньше памяти есть.
// Оказалось, что достаточно убрать сборку list.

function generate(n, list = [], openCount = 0, closeCount = 0, current = "") {
  if (current.length === 2 * n) {
    console.log(current);
    // list.push(current);
    return;
  }

  if (openCount < n) {
    generate(n, list, openCount + 1, closeCount, current + "(");
  }
  if (closeCount < openCount) {
    generate(n, list, openCount, closeCount + 1, current + ")");
  }
}

rl.on("line", (input) => {
  const n = Number(input);

  const list = [];
  generate(n, list);

  //   list.forEach((sequence) => console.log(sequence));

  rl.close();
});
