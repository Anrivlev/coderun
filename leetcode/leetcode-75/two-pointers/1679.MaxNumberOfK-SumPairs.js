/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  if (nums.length <= 1) return 0;
  const remaining = new Map();
  let operationCount = 0;
  for (let i = 0; i < nums.length; i++) {
    const pairCount = remaining.get(k - nums[i]);
    if (pairCount !== undefined) {
      operationCount++;
      if (pairCount === 1) remaining.delete(k - nums[i]);
      else remaining.set(k - nums[i], pairCount - 1);
    } else {
      const numberCount = remaining.get(nums[i]) ?? 0;
      remaining.set(nums[i], numberCount + 1);
    }
  }

  return operationCount;
};

/**
 * Решение, использующее меньше памяти, но мутирующее входной массив
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  if (nums.length <= 1) return 0;
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let operationCount = 0;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === k) {
      operationCount++;
      left++;
      right--;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }

  return operationCount;
};

console.log(maxOperations([1, 2, 3, 4], 5));
console.log(maxOperations([3, 1, 3, 4, 3], 6));
