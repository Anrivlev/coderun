// Для чтения входных данных в Node.js необходимо использовать
// модуль readline, который работает с потоком ввода-вывода
// (stdin/stdout) и позволяет читать строки.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Считывание данных из нескольких строк в переменную
let input;
rl.on("line", (line) => {
  input = line.split(" ").map((char) => Number(char));
  rl.close();
});

// Код решения можно писать внутри функции закрытия потока ввода
rl.on("close", () => {
  let neighbourCount = 0;
  for (let i = 1; i < input.length - 1; i++) {
    if (input[i] > input[i - 1] && input[i] > input[i + 1]) neighbourCount++;
  }
  console.log(neighbourCount);
  // Чтобы вывести результат в поток вывода (stdout),
  // можно использовать метод console.log().
});
