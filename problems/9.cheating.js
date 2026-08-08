const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, M;
const edges = [];

rl.on("line", (input) => {
  if (N === undefined) {
    [N, M] = input.split(" ").map((char) => Number(char));
    return;
  }

  edges.push(input.split(" ").map((char) => Number(char) - 1));

  if (edges.length === M) rl.close();
});

function getOppositeColor(color) {
  return color === 0 ? 1 : 0;
}

function isPossibleToColorInTwo(adjacencies) {
  const colors = new Array(N).fill(undefined); // 0 - Blue, 1 - Red
  for (let i = 0; i < N; i++) {
    if (colors[i] !== undefined) continue;

    const stack = [i];
    colors[i] = 0;
    while (stack.length > 0) {
      const j = stack.pop();
      const color = colors[j];
      const nextColor = getOppositeColor(color);
      for (node of adjacencies[j]) {
        if (colors[node] === color) {
          return false;
        }
        if (colors[node] === undefined) {
          colors[node] = nextColor;
          stack.push(node);
        }
      }
    }
  }

  return true;
}

rl.on("close", () => {
  const adjacencies = Array.from({ length: N }, () => []);
  edges.forEach(([i, j]) => {
    adjacencies[i].push(j);
    adjacencies[j].push(i);
  });

  const isPossible = isPossibleToColorInTwo(adjacencies);
  const answer = isPossible ? "YES" : "NO";
  console.log(answer);
});
