const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim();
const lines = input
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line.length > 0);

const N = Number.parseInt(lines[0], 10);
const gridLines = lines.slice(1).map((line) => line.split(""));

const grid = [];

for (let x = 0; x < N; x++) {
  const table = [];
  for (let y = 0; y < N; y++) {
    const row = gridLines[x * N + y];
    table.push(row);
  }
  grid.push(table);
}

const S = getSCoordinate(grid);
const shortestDistance = getShortestDistance(grid, S);
console.log(shortestDistance);

function getShortestDistance(grid, S) {
  if (grid.length === 0) return 0;
  if (grid.length === 1) return 1;
  const queue = [S];
  let head = 0;
  const distances = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => Array.from({ length: N }, () => -1)),
  );
  distances[S.x][S.y][S.z] = 0;

  while (head < queue.length) {
    const current = queue[head++];
    const neighbours = getNeighbours(grid, current);
    for (let neighbour of neighbours) {
      if (neighbour.x === 0)
        return distances[current.x][current.y][current.z] + 1;
      if (distances[neighbour.x][neighbour.y][neighbour.z] !== -1) continue;
      distances[neighbour.x][neighbour.y][neighbour.z] =
        distances[current.x][current.y][current.z] + 1;
      queue.push(neighbour);
    }
  }
  return -1;
}

function isInRange(coordinate, min, max) {
  return (
    coordinate.x >= min &&
    coordinate.x < max &&
    coordinate.y >= min &&
    coordinate.y < max &&
    coordinate.z >= min &&
    coordinate.z < max
  );
}

function getNeighbours(grid, coordinate) {
  return [
    { x: coordinate.x - 1, y: coordinate.y, z: coordinate.z },
    { x: coordinate.x + 1, y: coordinate.y, z: coordinate.z },
    { x: coordinate.x, y: coordinate.y - 1, z: coordinate.z },
    { x: coordinate.x, y: coordinate.y + 1, z: coordinate.z },
    { x: coordinate.x, y: coordinate.y, z: coordinate.z - 1 },
    { x: coordinate.x, y: coordinate.y, z: coordinate.z + 1 },
  ]
    .filter((coord) => isInRange(coord, 0, grid.length))
    .filter((coord) => grid[coord.x][coord.y][coord.z] === ".");
}

function getSCoordinate(grid) {
  const N = grid.length;
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      for (let z = 0; z < N; z++) {
        if (grid[x][y][z] === "S") return { x, y, z };
      }
    }
  }
  return { x: -1, y: -1, z: -1 };
}
