/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Валидно решение, но я хочу сделать лучше
var rotate = function (nums, k) {
  if (k >= nums.length) k = k % nums.length;
  if (k === 0) return;
  const rotatedNums = [...nums.slice(-k), ...nums.slice(0, -k)];
  nums.splice(0, nums.length, ...rotatedNums);
};

// Неправильно решение, ломается, если nums.length делится на k. Нужно грамотнее работать с циклами индексов.
// var rotate = function (nums, k) {
//   if (k >= nums.length) k = k % nums.length;
//   if (k === 0) return;
//   let i = 0;
//   let savedValue = nums[i];

//   do {
//     const j = (i + k) % nums.length;
//     const nextSavedValue = nums[j];
//     nums[j] = savedValue;

//     savedValue = nextSavedValue;
//     i = j;
//     console.log(nums);
//   } while (i !== 0);
// };

// const nums = [1, 2, 3, 4, 5, 6, 7];
// const k = 3;

const nums = [-1, -100, 3, 99];
const k = 2;

rotate(nums, k);
console.log(nums);
