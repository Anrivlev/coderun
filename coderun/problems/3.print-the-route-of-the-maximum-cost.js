// Для чтения входных данных в Node.js необходимо использовать
// модуль readline, который работает с потоком ввода-вывода
// (stdin/stdout) и позволяет читать строки.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Считывание данных из нескольких строк в переменную
let N, M;
const weights = [];
rl.on("line", (line) => {
  if (N === undefined) {
    [N, M] = line.split(" ").map((char) => Number(char));
    return;
  }

  weights.push(line.split(" ").map((char) => Number(char)));

  if (weights.length === N) rl.close();
});

// Код решения можно писать внутри функции закрытия потока ввода
rl.on("close", () => {
  // Чтобы вывести результат в поток вывода (stdout),
  // можно использовать метод console.log().
  const biggestWeights = getBiggestWeights(weights);
  const finalWeight = biggestWeights.at(-1).at(-1);
  const path = getBiggestWeigthPath(biggestWeights);
  console.log(finalWeight);
  console.log(path.join(" "));
});

function isInRange(i, min, max) {
  return i >= min && i <= max;
}

function getBiggestWeights(weights) {
  const N = weights.length;
  if (N === 0) return [];
  const M = weights[0].length;
  if (M === 0) return [];

  const biggestWeights = new Array(N)
    .fill(null)
    .map(() => new Array(M).fill(0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (i === 0 && j === 0) {
        biggestWeights[i][j] = weights[i][j];
        continue;
      }
      const weightFromTop = isInRange(i, 1, N)
        ? biggestWeights[i - 1][j]
        : -Infinity;
      const weightFromLeft = isInRange(j, 1, M)
        ? biggestWeights[i][j - 1]
        : -Infinity;
      biggestWeights[i][j] =
        Math.max(weightFromTop, weightFromLeft) + weights[i][j];
    }
  }

  return biggestWeights;
}

function getBiggestWeigthPath(biggestWeights) {
  const N = biggestWeights.length;
  if (N === 0) return [];
  const M = biggestWeights[0].length;
  if (M === 0) return [];

  const pathReversed = [];

  let i = N - 1;
  let j = M - 1;
  while (i !== 0 || j !== 0) {
    const topWeight = isInRange(i, 1, N) ? biggestWeights[i - 1][j] : -Infinity;
    const leftWeight = isInRange(j, 1, M)
      ? biggestWeights[i][j - 1]
      : -Infinity;
    if (topWeight > leftWeight) {
      pathReversed.push("D");
      i--;
    } else {
      pathReversed.push("R");
      j--;
    }
  }
  return pathReversed.reverse();
}
