const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null;
let M = null;
let K = null;
const mines = [];
rl.on("line", (input) => {
  if (N === null) {
    [N, M, K] = input.split(/\s+/).map((char) => Number(char));
    return;
  }

  mines.push(input.split(/\s+/).map((char) => Number(char) - 1));

  if (mines.length === K) rl.close();
});

rl.on("close", () => {
  const field = new Array(N).fill(null).map(() => new Array(M).fill(0));
  mines.forEach((mine) => {
    const i = mine[0];
    const j = mine[1];
    field[i][j] = "*";
    const neighbours = [];
    for (let k = -1; k <= 1; k++) {
      for (let w = -1; w <= 1; w++) {
        if (k === 0 && w === 0) continue;

        const neighbourI = i + k;
        if (neighbourI < 0 || neighbourI >= N) continue;
        const neighbourJ = j + w;
        if (neighbourJ < 0 || neighbourJ >= M) continue;

        neighbours.push([neighbourI, neighbourJ]);
      }
    }
    neighbours.forEach((neighbour) => {
      const fieldValue = field[neighbour[0]][neighbour[1]];
      if (fieldValue !== "*") field[neighbour[0]][neighbour[1]] += 1;
    });
  });

  for (row of field) {
    console.log(...row);
  }
});
