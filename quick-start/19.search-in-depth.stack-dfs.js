const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null;
let M = null;
const edges = [];
rl.on("line", (input) => {
  if (N === null) {
    [N, M] = input.split(/\s+/).map((char) => Number(char));
    return;
  }
  edges.push(input.split(" ").map((char) => Number(char) - 1));
  if (edges.length === M) rl.close();
});

rl.on("close", () => {
  const reachabilityTable = new Array(N)
    .fill(null)
    .map(() => new Array(N).fill(-1));
  edges.forEach((edge) => {
    const i = edge[0];
    const j = edge[1];
    reachabilityTable[i][j] = j; //  грязный хак, чтобы ниже фильтр не усложнять
    reachabilityTable[j][i] = i;
  });
  const reachableFrom0 = new Set();
  reachableFrom0.add(0);

  const stack = [0]; // лучше заменить на стэк, чтобы был поиск в глубину.
  while (stack.length !== 0) {
    const current = stack.pop();
    const reachableFromCurrent = reachabilityTable[current].filter(
      (value) => value !== -1,
    ); //  Хитрый фильтр

    reachableFromCurrent.forEach((node) => {
      if (reachableFrom0.has(node)) return;
      stack.push(node);
      reachableFrom0.add(node);
    });
  }

  console.log(reachableFrom0.size);
  console.log(
    ...Array.from(reachableFrom0)
      .sort((a, b) => a - b)
      .map((value) => value + 1),
  );
});
