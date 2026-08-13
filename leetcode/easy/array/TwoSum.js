/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numToIndex = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const targetMinusNumIndex = numToIndex.get(target - num);
    if (targetMinusNumIndex !== undefined) return [targetMinusNumIndex, i];
    numToIndex.set(num, i);
  }

  return [-1, -1];
};
