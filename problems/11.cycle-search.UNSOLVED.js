const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
const adjacencyMatrix = [];
rl.on("line", (input) => {
  if (n === undefined) {
    n = input.split(" ").map((char) => Number(char))[0];
    return;
  }
  adjacencyMatrix.push(input.split(" ").map((char) => Number(char)));
  if (adjacencyMatrix.length === n) rl.close();
});

function getNeighbours(adjacencyMatrixRow) {
  const neighbours = [];
  adjacencyMatrixRow.forEach((node, i) => {
    if (node === 1) neighbours.push(i);
  });
  return neighbours;
}

function getCycleIndex(adjacencyMatrix) {
  const visited = new Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    const stack = [i];
    while (stack.length > 0) {
      const j = stack.pop();
      if (visited[j]) return j;
      visited[j] = true;
      const neighbours = getNeighbours(adjacencyMatrix[j]);
      for (let neighbour of neighbours) {
        stack.push(neighbour);
      }
    }
  }
}

rl.on("close", () => {
    const cycleIndex = getCycleIndex(adjacencyMatrix);
    
});

// Здесь нужно запоминать родителей, чтобы восстанавливать путь.