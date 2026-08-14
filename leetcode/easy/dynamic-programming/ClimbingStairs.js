/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const solutions = new Array(n + 1).fill(0);
  solutions[0] = 1;
  solutions[1] = 1;
  for (let i = 2; i < solutions.length; i++) {
    solutions[i] = solutions[i - 1] + solutions[i - 2];
  }
  return solutions.at(-1);
};

console.log(climbStairs(3));
