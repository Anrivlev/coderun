/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (points.length === 0) return 0;
  points.sort((a, b) => a[1] - b[1]);

  let arrowCount = 0;
  let rightEnd = -Infinity;

  for (const point of points) {
    if (point[0] > rightEnd) {
      arrowCount++;
      rightEnd = point[1];
    }
  }

  return arrowCount;
};

console.log(
  findMinArrowShots([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12],
  ]),
);
