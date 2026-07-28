// Для чтения входных данных в Node.js необходимо использовать
// модуль readline, который работает с потоком ввода-вывода
// (stdin/stdout) и позволяет читать строки.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Считывание данных из нескольких строк в переменную
const words = new Set();
rl.on("line", (line) => {
  line.split(/\s/).forEach((word) => words.add(word));
});

// Код решения можно писать внутри функции закрытия потока ввода
rl.on("close", () => {
  console.log(words.size);
  // Чтобы вывести результат в поток вывода (stdout),
  // можно использовать метод console.log().
});
