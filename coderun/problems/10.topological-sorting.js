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

function getTopologicalSort(inputs, outputs) {
  const N = inputs.length;
  const topologicalSort = [];
  const degrees = inputs.map((input) => input.length);

  for (let i = 0; i < N; i++) {
    const isRoot = inputs[i].length === 0;
    if (!isRoot) continue;

    const queue = [i];
    let head = 0;
    while (queue.length > head) {
      const j = queue[head++];
      topologicalSort.push(j);
      for (const k of outputs[j]) {
        degrees[k] = degrees[k] -= 1;
        if (degrees[k] === 0) queue.push(k);
      }
    }
  }

  if (topologicalSort.length !== N) return undefined;

  return topologicalSort;
}

rl.on("close", () => {
  const inputs = Array.from({ length: N }, () => []);
  const outputs = Array.from({ length: N }, () => []);

  edges.forEach(([i, j]) => {
    inputs[j].push(i);
    outputs[i].push(j);
  });

  const topologicalSort = getTopologicalSort(inputs, outputs);

  if (topologicalSort === undefined) {
    console.log(-1);
  } else {
    console.log(topologicalSort.map((index) => index + 1).join(" "));
  }
});
