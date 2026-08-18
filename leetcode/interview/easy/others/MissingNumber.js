/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  const n = nums.length;
  const sumWithMissed = (n * (n + 1)) / 2;
  return sumWithMissed - sum;
};

console.log(missingNumber([0, 1, 2, 4]));
