/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rows = new Set();
  const columns = new Set();
  const m = matrix.length;
  if (m === 0) return;
  const n = matrix[0].length;
  if (n === 0) return;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        columns.add(j);
      }
    }
  }
  for (const row of rows) {
    for (let j = 0; j < n; j++) {
      matrix[row][j] = 0;
    }
  }
  for (const column of columns) {
    for (let i = 0; i < m; i++) {
      matrix[i][column] = 0;
    }
  }
};

const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
setZeroes(matrix);
console.log(matrix);
