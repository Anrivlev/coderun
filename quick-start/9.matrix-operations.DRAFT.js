const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = null;
let m = null;
let k = null;
let A = null;
let B = null;
let i = 0;
rl.on("line", (input) => {
  if (n === null) {
    [n, m, k] = input.split(" ").map((char) => Number(char));
    A = new Array(n).fill(null).map(() => new Array(m).fill(0));
    B = new Array(m).fill(null).map(() => new Array(k).fill(0));
    return;
  }
  
  /*
    Пример ввода и вывода числа n, где -10^9 < n < 10^9:
    const n = parseInt(input);
    console.log(n);
    */

  rl.close();
});

rl.on("close", () => {
  const C = matrixMultiply(A, B);
  for (let j = 0; j < C[0].length; j++) {
    const row = [];
    for (let i = 0; i < C.length; i++) {
      row.push(C[i][j]);
    }
    console.log(row.join(" "));
  }
});

function matrixMultiply(A, B) {
  const n = A.length;
  const m = A[0].length;
  const k = B[0].length;
  const C = new Array(n).fill(null).map(() => new Array(k).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < k; j++) {
      for (let w = 0; w < m; w++) {
        C[i][j] += A[i][w] * B[w][j];
      }
    }
  }
  return C;
}
