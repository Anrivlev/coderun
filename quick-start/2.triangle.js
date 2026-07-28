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
rl.on("line", (line) => {
  //   input.push(...line.split("").map((char) => Number(char)));
  input.push(Number(line));
  if (input.length === 3) rl.close();
});

// Код решения можно писать внутри функции закрытия потока ввода
rl.on("close", () => {
  // Чтобы вывести результат в поток вывода (stdout),
  // можно использовать метод console.log().
  const isValid = isValidTriangle(input[0], input[1], input[2]);
  const isValidString = isValid ? "YES" : "NO";
  console.log(isValidString);
});

function isValidTriangle(A, B, C) {
  return A !== 0 && B !== 0 && C !== 0 && A + B > C && A + C > B && B + C > A;
}
