/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  if (nums.length <= 1) return 0;
  let left = -1;
  let isAtLeastOneZero = false;
  let maxLength = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      if (isAtLeastOneZero) {
        do {
          left++;
        } while (nums[left] !== 0);
      } else isAtLeastOneZero = true;
    }
    const length = right - left;
    if (length > maxLength) maxLength = length;
  }
  return maxLength - 1;
};

console.log(longestSubarray([1, 1, 0, 1]));
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));
