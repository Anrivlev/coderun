/**
 * Более быстрое и короткое решение требовало бы запомнить число свежих апельсинов и посмотреть на него, когда закончится bfs.
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
  let maxDistance = -Infinity;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (distances[i][j] === -1 && grid[i][j] === 1) return -1;
      if (distances[i][j] > maxDistance) maxDistance = distances[i][j];
    }
  }
  return maxDistance;
};

/**
 * Более быстрое и короткое решение. Все равно медленное, но проходит тесты.
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

  let freshCount = 0;

  const queue = [];
  let head = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      switch (grid[i][j]) {
        case 0: {
          distances[i][j] = 0;
          break;
        }
        case 1: {
          freshCount++;
          break;
        }
        case 2: {
          queue.push({ i, j });
          distances[i][j] = 0;
          break;
        }
      }
    }
  }

  let maxDistance = 0;
  while (head < queue.length && freshCount > 0) {
    const { i, j } = queue[head++];
    const neighbours = getNeighbours(i, j);
    for (const neighbour of neighbours) {
      if (
        distances[neighbour.i][neighbour.j] !== -1 ||
        grid[neighbour.i][neighbour.j] !== 1
      )
        continue;
      freshCount--;
      distances[neighbour.i][neighbour.j] = distances[i][j] + 1;
      if (distances[neighbour.i][neighbour.j] > maxDistance)
        maxDistance = distances[neighbour.i][neighbour.j];
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
  return freshCount === 0 ? maxDistance : -1;
};

// const grid = [
//   [2, 1, 1],
//   [0, 1, 1],
//   [1, 0, 1],
// ];
console.log(orangesRotting([[0, 2]]));
