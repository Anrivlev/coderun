/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let zeroCount = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === 0) {
      zeroCount += 1;
    } else {
      nums[i - zeroCount] = num;
    }
  }
  for (let i = 0; i < zeroCount; i++) {
    nums[nums.length - i - 1] = 0;
  }
  return nums;
};

const nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums));
