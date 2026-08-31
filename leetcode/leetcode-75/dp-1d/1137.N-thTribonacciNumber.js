/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;
  let prev0 = 0;
  let prev1 = 1;
  let prev2 = 1;
  for (let i = 3; i < n; i++) {
    const next = prev0 + prev1 + prev2;
    prev0 = prev1;
    prev1 = prev2;
    prev2 = next;
  }
  return prev0 + prev1 + prev2;
};
