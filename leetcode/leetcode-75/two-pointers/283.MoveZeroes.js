/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let firstZeroIndex = undefined;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] !== 0 && firstZeroIndex !== undefined) {
      nums[firstZeroIndex] = nums[i];
      nums[i] = 0;
      while (nums[firstZeroIndex] !== 0) {
        firstZeroIndex++;
        // if (firstZeroIndex === nums.length - 1) return;
      }
    }
    if (nums[i] === 0 && firstZeroIndex === undefined) firstZeroIndex = i;
    i++;
  }
};

var moveZeroes = function (nums) {
  let zeroCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) zeroCount++;
    else if (zeroCount > 0) {
      const swap = nums[i];
      nums[i] = nums[i - zeroCount];
      nums[i - zeroCount] = swap;
    }
  }
};

const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);
