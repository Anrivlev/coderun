// Для чтения входных данных в Node.js необходимо использовать
// модуль readline, который работает с потоком ввода-вывода
// (stdin/stdout) и позволяет читать строки.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Считывание данных из нескольких строк в переменную
let x = null;
let y = null;
let z = null;
let N = null;
rl.on("line", (line) => {
  if (x === null) {
    [x, y, z] = line
      .trim()
      .split(" ")
      .map((char) => Number(char));
    return;
  }
  N = Number(line);
  rl.close();
});

// Код решения можно писать внутри функции закрытия потока ввода
rl.on("close", () => {
  const neededDigitsToWriteN = new Set();
  `${N}`
    .split("")
    .map((char) => Number(char))
    .forEach((digit) => {
      if (digit !== x && digit !== y && digit !== z)
        neededDigitsToWriteN.add(digit);
    });
  console.log(neededDigitsToWriteN.size);

  // Чтобы вывести результат в поток вывода (stdout),
  // можно использовать метод console.log().
});
