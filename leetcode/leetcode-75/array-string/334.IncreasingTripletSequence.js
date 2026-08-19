/**
 * Полный перебор.
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  if (nums.length < 3) return false;
  let i = 0;
  let j = 1;
  let k = 2;
  while (k < nums.length) {
    // console.log(nums[i], nums[j], nums[k]);
    if (nums[i] < nums[j] && nums[j] < nums[k]) return true;
    if (k < nums.length - 1) k++;
    else if (j < nums.length - 2) {
      j++;
      k = j + 1;
    } else {
      i++;
      j = i + 1;
      k = j + 1;
    }
  }
  return false;
};

/**
 * Мудрое решение по гайдам
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let first = Infinity;
  let second = Infinity;
  for (const num of nums) {
    if (num <= first) {
      first = num;
    } else if (num <= second) {
      second = num;
    } else {
      return true;
    }
  }
  return false;
};

console.log(increasingTriplet([1, 2, 3, 4, 5]));
console.log(increasingTriplet([5, 4, 3, 2, 1]));
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));
console.log(increasingTriplet([20, 100, 10, 12, 5, 13]));
console.log(increasingTriplet([1, 5, 0, 4, 1, 3]));
