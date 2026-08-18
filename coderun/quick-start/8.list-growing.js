// Для чтения входных данных в Node.js необходимо использовать
// модуль readline, который работает с потоком ввода-вывода
// (stdin/stdout) и позволяет читать строки.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Считывание данных из нескольких строк в переменную
let numberList;
rl.on("line", (line) => {
  numberList = line.split(" ").map((char) => Number(char));
  rl.close();
});

// Код решения можно писать внутри функции закрытия потока ввода
rl.on("close", () => {
  let isMonotoneAsc = true;
  for (let i = 1; i < numberList.length; i++) {
    if (numberList[i] <= numberList[i - 1]) {
      isMonotoneAsc = false;
      break;
    }
  }
  const answer = isMonotoneAsc ? "YES" : "NO";
  console.log(answer);
  // Чтобы вывести результат в поток вывода (stdout),
  // можно использовать метод console.log().
});
