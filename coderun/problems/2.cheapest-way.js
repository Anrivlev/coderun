const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, M;
const table = [];

rl.on("line", (input) => {
  if (N === undefined) {
    [N, M] = input.split(" ").map((char) => Number(char));
    return;
  }

  table.push(input.split(" ").map((char) => Number(char)));

  if (table.length === N) rl.close();
});

rl.on("close", () => {
  const minPathWeight = getMinPathWeight(table);
  console.log(minPathWeight);
});

function isInRange(i, min, max) {
  return i >= min && i < max;
}

function getMinPathWeight(weights) {
  const N = weights.length;
  if (N === 0) return 0;
  const M = weights[0].length;
  if (M === 0) return 0;

  const results = new Array(N).fill(null).map(() => new Array(M).fill(0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (i === 0 && j === 0) {
        results[0][0] = weights[i][j];
        continue;
      }
      const weightFromTop = isInRange(i, 1, N) ? results[i - 1][j] : Infinity;
      const weightFromLeft = isInRange(j, 1, M) ? results[i][j - 1] : Infinity;
      results[i][j] = Math.min(weightFromTop, weightFromLeft) + weights[i][j];
    }
  }

  return results.at(-1).at(-1);
}
