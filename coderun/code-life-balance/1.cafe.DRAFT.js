// Решение верное, но слишком много памяти и времени расходует. Не оптимальное.
// Страшно не оптимальное, я бы даже не назвал его правильным. Это скорее полный перебор, чем решение

// Для чтения входных данных в Node.js необходимо использовать
// модуль readline, который работает с потоком ввода-вывода
// (stdin/stdout) и позволяет читать строки.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Считывание данных из нескольких строк в переменную
let N = null;
const prices = [];
rl.on("line", (data) => {
  if (N === null) {
    N = Number(data);
  } else {
    prices.push(Number(data));
    if (prices.length === N) rl.close();
  }
});

function sortResultsByTotal(a, b) {
  const totalDifference = a.total - b.total;
  if (totalDifference !== 0) return totalDifference;
  return b.k1 - a.k1;
}

// function sortResultsByK1(a, b) {
//   const k1Difference = a.k1 - b.k1;
//   if (k1Difference !== 0) return k1Difference;
//   return b.total - a.total;
// }

// function removeWorstResults(results) {
//   const sorted = results.sort(sortResultsByK1);

//   const betterResults = [sorted[0]];
//   let prev = sorted[0];
//   for (let i = 1; i < results.length; i++) {
//     let curr = results[i];

//     if (curr.k1 === prev.k1 || curr.total >= prev.total) {
//       continue;
//     }

//     betterResults.push(curr);

//     prev = curr;
//   }

//   return betterResults;
// }

// Код решения можно писать внутри функции
rl.on("close", () => {
  // Чтобы вывести результат в поток вывода (stdout),
  // можно использовать метод console.log().

  const results = [[{ k1: 0, k2: 0, total: 0, couponDays: [] }]];

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    const nextResults = [];
    for (let j = 0; j < results[i].length; j++) {
      const { k1, k2, total, couponDays } = results[i][j];
      const price = prices[i];

      if (price > 100) {
        nextResults.push({
          k1: k1 + 1,
          k2,
          total: total + price,
          couponDays: couponDays.slice(),
        });
      } else {
        nextResults.push({
          k1,
          k2,
          total: total + price,
          couponDays: couponDays.slice(),
        });
      }

      if (k1 > 0) {
        nextResults.push({
          k1: k1 - 1,
          k2: k2 + 1,
          total,
          couponDays: [...couponDays, i + 1],
        });
      }
    }
    results.push(nextResults.sort(sortResultsByTotal));
  }

  const bestResult = results.at(-1)[0];
  console.log(bestResult.total);
  console.log(bestResult.k1, bestResult.k2);
  for (couponDay of bestResult.couponDays) {
    console.log(couponDay);
  }
});
