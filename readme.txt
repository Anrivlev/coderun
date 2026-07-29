Coderun от Яндекса.
https://coderun.yandex.ru/selections
Последняя нерешенная задача:
https://coderun.yandex.ru/problem/picture-with-a-variation

Решать дальше:
https://coderun.yandex.ru/catalog?groups=frontend&language=javascript&status=NOT_SOLVED&status=WRONG
https://coderun.yandex.ru/selections/2024-summer-frontend

Прочие ссылки
https://leetcode.com/?from=interview&utm_medium=web&utm_source=company_header
https://www.codewars.com/?from=interview&utm_medium=web&utm_source=company_header
https://www.hackerrank.com/?from=interview&utm_medium=web&utm_source=company_header

const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const lines = fs
  .readFileSync(0, "utf8")
  .trim()
  .split(/\r?\n/);

// Для чтения входных данных в Node.js необходимо использовать
// модуль readline, который работает с потоком ввода-вывода
// (stdin/stdout) и позволяет читать строки.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Считывание данных из нескольких строк в переменную
let input = [];
rl.on('line', data => {
    input.push(Number(data));
});

// Код решения можно писать внутри функции
rl.on('close', () => {
  
  // Чтобы вывести результат в поток вывода (stdout),
  // можно использовать метод console.log().
});