/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const n = grid.length;
//   const rowHashes = new Map();
  const columnHashes = new Map();
//   for (let i = 0; i < n; i++) {
//     const row = grid[i];
//     const hash = row.join(" ");
//     const count = rowHashes.get(hash) ?? 0;
//     rowHashes.set(hash, count + 1);
//   }
//   const columns = [];
  for (let j = 0; j < n; j++) {
    const column = [];
    for (let i = 0; i < n; i++) {
      column.push(grid[i][j]);
    }
    // columns.push(column);
    const hash = column.join(" ");
    const count = columnHashes.get(hash) ?? 0;
    columnHashes.set(hash, count + 1);
  }
  let pairCount = 0;
  for (let i = 0; i < n; i++) {
    const row = grid[i];
    const hash = row.join(" ");
    pairCount += columnHashes.get(hash) ?? 0;
  }
//   for (let j = 0; j < n; j++) {
//     const column = columns[j];
//     const hash = column.join(" ");
//     pairCount += rowHashes.get(hash) ?? 0;
//   }
  return pairCount;
};

console.log(
  equalPairs([
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7],
  ]),
);
