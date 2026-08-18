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
rl.on("line", (line) => {
  [N, M] = line.split(" ").map((char) => Number(char));
  rl.close();
});

// Код решения можно писать внутри функции закрытия потока ввода
rl.on("close", () => {
  const pathCounts = getPathCounts(N, M);
  const rightBottomPathCount = pathCounts.at(-1).at(-1);
  console.log(rightBottomPathCount);
});

function isInRange(i, min, max) {
  return i >= min && i < max;
}

function getPathCounts(N, M) {
  if (N === 0 || M === 0) return [[1]];
  const pathCounts = new Array(N).fill(null).map(() => new Array(M).fill(0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (i === 0 && j === 0) {
        pathCounts[i][j] = 1;
        continue;
      }
      const pathCountDDR =
        isInRange(i - 2, 0, N) && isInRange(j - 1, 0, M)
          ? pathCounts[i - 2][j - 1]
          : 0;
      const pathCountDRR =
        isInRange(i - 1, 0, N) && isInRange(j - 2, 0, M)
          ? pathCounts[i - 1][j - 2]
          : 0;
      pathCounts[i][j] = pathCountDDR + pathCountDRR;
    }
  }
  return pathCounts;
}
