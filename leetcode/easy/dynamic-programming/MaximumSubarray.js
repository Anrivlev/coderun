/**
 * Чудовищно неоптимальное решение. Придумываю новое.
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function (nums) {
//   const n = nums.length;
//   const sums = Array.from({ length: n }, () => new Array(n).fill(-Infinity));

//   for (let i = 0; i < n; i++) {
//     sums[i][i] = nums[i];
//   }
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i; j++) {
//       sums[j][i] = sums[j][i - 1] + nums[i];
//     }
//   }

//   let max = -Infinity;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (sums[i][j] > max) max = sums[i][j];
//     }
//   }
//   return max;
// };

/**
 * Алгорит Кадана
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const n = nums.length;

  let bestEndingHere = nums[0];
  let max = nums[0];

  for (let i = 1; i < n; i++) {
    bestEndingHere = Math.max(nums[i], bestEndingHere + nums[i]);

    max = Math.max(bestEndingHere, max);
  }

  return max;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
