/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let prevPrevMax = nums[0];
  let prevMax = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    const nextMax = Math.max(prevMax, prevPrevMax + nums[i]);
    prevPrevMax = prevMax;
    prevMax = nextMax;
  }

  return prevMax;
};

console.log(rob([1, 2, 3, 1]));
