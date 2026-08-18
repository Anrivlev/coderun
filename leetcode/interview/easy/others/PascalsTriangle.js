/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const triangle = [[1]];

  for (let i = 1; i < numRows; i++) {
    const prevRow = triangle.at(-1);
    const row = [];
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) row.push(1);
      else {
        const j1 = j - 1;
        const j2 = j;
        row.push((prevRow[j1] ?? 0) + (prevRow[j2] ?? 0));
      }
    }
    triangle.push(row);
  }

  return triangle;
};

console.log(generate(5));
