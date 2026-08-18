const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, A, B;
const adjacencyMatrix = [];
rl.on("line", (input) => {
  if (N === undefined) {
    N = input.split(" ").map((char) => Number(char))[0];
    return;
  }
  if (adjacencyMatrix.length < N) {
    adjacencyMatrix.push(input.split(" ").map((char) => Number(char)));
    return;
  }

  [A, B] = input.split(" ").map((char) => Number(char) - 1);

  rl.close();
});

function getNeighbours(adjacencyMatrixRow) {
  const neighbours = [];
  adjacencyMatrixRow.forEach((value, index) => {
    if (value === 1) neighbours.push(index);
  });
  return neighbours;
}

function findShortestPath(adjacencyMatrix, A, B) {
  if (A === B) {
    return 0;
  }
  const visited = new Array(N).fill(false);
  visited[A] = true;

  const distances = new Array(N).fill(0);
  distances[A] = 0;

  const queue = [A];
  let head = 0;
  while (head < queue.length) {
    const j = queue[head++];

    const neighbours = getNeighbours(adjacencyMatrix[j]);
    for (let neighbour of neighbours) {
      if (neighbour === B) {
        return distances[j] + 1;
      }

      if (visited[neighbour]) continue;
      visited[neighbour] = true;
      distances[neighbour] = distances[j] + 1;

      queue.push(neighbour);
    }
  }

  return -1;
}

rl.on("close", () => {
  const shortestPath = findShortestPath(adjacencyMatrix, A, B);
  console.log(shortestPath);
});
