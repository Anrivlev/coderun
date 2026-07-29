// https://coderun.yandex.ru/problem/calculator

// Для чтения входных данных в Node.js необходимо использовать
// модуль readline, который работает с потоком ввода-вывода
// (stdin/stdout) и позволяет читать строки.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Считывание данных из нескольких строк в переменную
let N;
rl.on("line", (line) => {
  N = Number(line);
  rl.close();
});

// Код решения можно писать внутри функции закрытия потока ввода
rl.on("close", () => {
  const queue = [1];
  let head = 0;

  const visited = new Set();
  visited.add(1);
  const parents = new Map();

  function addToVisitedParentsAndQueue(value, prev) {
    if (value > N) return false;
    if (value === N) {
      parents.set(value, prev);
      return true;
    }

    if (visited.has(value)) return false;

    visited.add(value);
    parents.set(value, prev);
    queue.push(value);

    return false;
  }

  while (head < queue.length) {
    const current = queue[head];
    head++;
    if (addToVisitedParentsAndQueue(current * 3, current)) break;
    if (addToVisitedParentsAndQueue(current * 2, current)) break;
    if (addToVisitedParentsAndQueue(current + 1, current)) break;
  }

  const steps = [N];
  let current = N;
  while (current !== 1) {
    current = parents.get(current);
    steps.push(current);
  }

  console.log(steps.length - 1);
  console.log(...steps.reverse());
});
