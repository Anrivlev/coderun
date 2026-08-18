/**
 * Мое личное решение
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function (nums) {
//   const answer = new Array(nums.length).fill(1);
//   const prefixes = new Array(nums.length).fill(1);
//   const suffixes = new Array(nums.length).fill(1);
//   for (let i = 0; i < nums.length; i++) {
//     prefixes[i] = (prefixes[i - 1] ?? 1) * nums[i];
//   }
//   for (let i = nums.length - 1; i >= 0; i--) {
//     suffixes[i] = (suffixes[i + 1] ?? 1) * nums[i];
//   }
//   for (let i = 0; i < nums.length; i++) {
//     answer[i] = (prefixes[i - 1] ?? 1) * (suffixes[i + 1] ?? 1);
//   }
//   return answer;
// };

/**
 * Решение лучше по памяти
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const answer = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    answer[i] = (answer[i - 1] ?? 1) * (nums[i - 1] ?? 1);
  }
  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    suffix *= nums[i + 1] ?? 1;
    answer[i] *= suffix;
  }
  return answer;
};

console.log(productExceptSelf([1, 2, 3, 4]));
