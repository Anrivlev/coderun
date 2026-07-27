// Для чтения входных данных в Node.js необходимо использовать
// модуль readline, который работает с потоком ввода-вывода
// (stdin/stdout) и позволяет читать строки.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Считывание данных из нескольких строк в переменную
let input = [];
rl.on("line", (data) => {
  input.push(Number(data));
  if (input.length === 5) rl.close();
});

// Код решения можно писать внутри функции
rl.on("close", () => {
  const A = input[0];
  const B = input[1];
  const C = input[2];
  const D = input[3];
  const E = input[4];
  solve(A, B, C, D, E);

  // Чтобы вывести результат в поток вывода (stdout),
  // можно использовать метод console.log().
});

function isRect1FitIn2(A1, B1, A2, B2) {
  return (A1 <= A2 && B1 <= B2) || (B1 <= A2 && A1 <= B2);
}

function solve(A, B, C, D, E) {
  const isPossible =
    isRect1FitIn2(A, B, D, E) ||
    isRect1FitIn2(A, C, D, E) ||
    isRect1FitIn2(B, C, D, E);
  const answer = isPossible ? "YES" : "NO";
  console.log(answer);
}
