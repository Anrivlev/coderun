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

rl.on("close", () => {
  const visited = new Array(N).fill(false);
  const adjacent = Array.from({ length: N }, () => new Array());
  const connectivities = [];

  edges.forEach(([i, j]) => {
    adjacent[i].push(j);
    adjacent[j].push(i);
  });

  for (let i = 0; i < N; i++) {
    if (visited[i]) {
      continue;
    }
    const stack = [i];
    const currentConnectivity = [];
    while (stack.length > 0) {
      const current = stack.pop();
      if (visited[current]) continue;
      visited[current] = true;
      currentConnectivity.push(current);
      stack.push(...adjacent[current]);
    }
    connectivities.push(currentConnectivity);
  }

  console.log(connectivities.length);
  connectivities.forEach((connectivity) => {
    console.log(connectivity.length);
    console.log(connectivity.map((node) => node + 1).join(" "));
  });
});
