const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
rl.on("line", (input) => {
  /*
    Пример ввода и вывода числа n, где -10^9 < n < 10^9:
    const n = parseInt(input);
    console.log(n);
    */
  n = Number(input);

  rl.close();
});

rl.on("close", () => {
  if (n === 0) {
    console.log(0);
    return;
  }
  if (n === 1) {
    console.log(1);
    return;
  }
  
  const tagCounts = new Array(n).fill(0);
  tagCounts[0] = 1;
  tagCounts[1] = 1;
  for (let i = 2; i < tagCounts.length; i++) {
    tagCounts[i] = tagCounts[i - 1] + tagCounts[i - 2];
  }
  const tagCountSum = tagCounts.reduce((prev, curr) => prev + curr, 0);
  console.log(tagCountSum);
});
