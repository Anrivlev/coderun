/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let currentLength = 0;
  let currentZeroCount = 0;
  let maxLength = 0;
  let left = -1;
  for (let i = 0; i < nums.length; i++) {
    currentLength++;
    if (nums[i] === 0) {
      currentZeroCount++;
      if (currentZeroCount > k) {
        currentZeroCount--;
        do {
          left++;
          currentLength--;
        } while (nums[left] !== 0);
      }
    }
    if (currentLength > maxLength) maxLength = currentLength;
  }

  return maxLength;
};

/**
 * Слегка почищенное решение
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let currentZeroCount = 0;
  let maxLength = 0;
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      currentZeroCount++;
    }
    while (currentZeroCount > k) {
      if (nums[left] === 0) currentZeroCount--;
      left++;
    }

    const currentLength = i - left + 1;
    if (currentLength > maxLength) maxLength = currentLength;
  }

  return maxLength;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
console.log(
  longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3),
);
