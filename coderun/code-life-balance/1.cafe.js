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

// Код решения можно писать внутри функции
rl.on("close", () => {
  // Чтобы вывести результат в поток вывода (stdout),
  // можно использовать метод console.log().
  solve(prices);
});

function solve(prices) {
  // Размер внутренних массивов можно сделать в 2 раза меньше (превратить таблицу в треугольник)
  const results = new Array(prices.length)
    .fill(null)
    .map(() => new Array(prices.length + 1).fill(null));

  // цикл по дням
  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    // цикл по купонам
    for (let j = 0; j <= i + 1; j++) {
      if (i === 0) {
        // После первого дня:
        // если обед дорогой, появляется один купон;
        // иначе купонов остаётся ноль.
        if (j === (price > 100 ? 1 : 0)) {
          results[i][j] = price;
        }
      } else {
        const possibleResults = [];

        // Петя оплачивает текущий дорогой обед.
        // До этого было j - 1 купонов, после оплаты стало j.
        if (price > 100 && j > 0 && results[i - 1][j - 1] !== null) {
          possibleResults.push(results[i - 1][j - 1] + price);
        }

        // Петя оплачивает текущий недорогой обед.
        // Количество купонов не меняется.
        if (price <= 100 && results[i - 1][j] !== null) {
          possibleResults.push(results[i - 1][j] + price);
        }

        // Петя использует купон.
        // До этого было j + 1 купонов, после использования осталось j.
        if (j + 1 < results[i - 1].length && results[i - 1][j + 1] !== null) {
          possibleResults.push(results[i - 1][j + 1]);
        }

        results[i][j] =
          possibleResults.length === 0 ? null : Math.min(...possibleResults);
      }
    }
  }

  let lowestTotal = Infinity;
  let lowestTotalIndex = -1; // Равен количеству купонов

  for (let i = 0; i < results.at(-1).length; i++) {
    const total = results.at(-1)[i];
    if (total === null) continue;
    if (total <= lowestTotal) {
      lowestTotal = total;
      lowestTotalIndex = i;
    }
  }

  const k1 = lowestTotalIndex;
  let k2 = 0;
  const couponDays = [];

  let j = k1;

  for (let i = prices.length - 1; i > 0; i--) {
    const usedCoupon =
      j + 1 < results[i - 1].length &&
      results[i - 1][j + 1] !== null &&
      results[i][j] === results[i - 1][j + 1];

    if (usedCoupon) {
      k2 += 1;
      couponDays.push(i + 1);

      // До использования купона их было на один больше.
      j += 1;
    } else if (prices[i] > 100) {
      // Если дорогой обед был оплачен, при движении назад
      // отнимаем полученный в этот день купон.
      j -= 1;
    }

    // При оплате обеда стоимостью <= 100
    // количество купонов не менялось.
  }

  // console.log(results); // для debug
  console.log(lowestTotal);
  console.log(k1, k2);
  couponDays.reverse();
  for (const couponDay of couponDays) {
    console.log(couponDay);
  }
}
