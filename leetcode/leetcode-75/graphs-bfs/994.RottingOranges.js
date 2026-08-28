/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  if (!grid) return 0;
  const m = grid.length;
  if (m === 0) return 0;
  const n = grid[0].length;
  if (n === 0) return 0;

  const distances = Array.from({ length: m }, () => new Array(n).fill(-1));

  const queue = [];
  let head = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push({ i, j });
        distances[i][j] = 0;
      } else if (grid[i][j] === 0) distances[i][j] = 0;
    }
  }

  while (head < queue.length) {
    const { i, j } = queue[head++];
    const neighbours = getNeighbours(i, j);
    for (const neighbour of neighbours) {
      if (
        distances[neighbour.i][neighbour.j] !== -1 ||
        grid[neighbour.i][neighbour.j] !== 1
      )
        continue;
      distances[neighbour.i][neighbour.j] = distances[i][j] + 1;
      queue.push(neighbour);
    }
  }

  function getNeighbours(i, j) {
    return [
      { i: i - 1, j },
      { i: i + 1, j },
      { i, j: j - 1 },
      { i, j: j + 1 },
    ].filter(({ i, j }) => i >= 0 && i < m && j >= 0 && j < n);
  }
  console.log(distances);
  let maxDistance = -Infinity;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (distances[i][j] === -1 && grid[i][j] === 1) return -1;
      if (distances[i][j] > maxDistance) maxDistance = distances[i][j];
    }
  }
  return maxDistance;
};

// const grid = [
//   [2, 1, 1],
//   [0, 1, 1],
//   [1, 0, 1],
// ];
console.log(orangesRotting([[0, 2]]));
