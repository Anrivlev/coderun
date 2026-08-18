/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 1;
  const numsWithoutDuplicates = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== numsWithoutDuplicates.at(-1))
      numsWithoutDuplicates.push(nums[i]);
  }
  //   for (let i = 0; i < numsWithoutDuplicates.length; i++) {
  //     nums[i] = numsWithoutDuplicates[i];
  //   }
  nums.splice(0, numsWithoutDuplicates.length, ...numsWithoutDuplicates);
  return numsWithoutDuplicates.length;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const distinctCount = removeDuplicates(nums);

console.log(distinctCount, nums);
