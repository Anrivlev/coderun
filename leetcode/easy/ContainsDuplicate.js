/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const distinctNums = new Set();
  for (const num of nums) {
    if (distinctNums.has(num)) return true;
    distinctNums.add(num);
  }
  return false;
};

const nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));
