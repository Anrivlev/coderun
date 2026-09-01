/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  if (cost.length === 0) return 0;
  if (cost.length === 1) return cost[0];

  let prevPrevMin = cost[0];
  let prevMin = cost[1];
  for (let i = 2; i < cost.length; i++) {
    const nextMin = Math.min(prevPrevMin, prevMin) + cost[i];
    prevPrevMin = prevMin;
    prevMin = nextMin;
  }
  return Math.min(prevPrevMin, prevMin);
};
