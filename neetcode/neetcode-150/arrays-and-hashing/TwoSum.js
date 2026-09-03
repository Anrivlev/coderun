class Solution {
  /**
   * two pass solution
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const numToFirstIndex = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (numToFirstIndex.has(nums[i]))
        return [numToFirstIndex.get(nums[i]), i];
      numToFirstIndex.set(nums[i], i);
    }
    for (let i = 0; i < nums.length; i++) {
      const pairIndex = numToFirstIndex.get(target - nums[i]);
      if (pairIndex === undefined || pairIndex === i) continue;
      return [i, pairIndex];
    }
    return [-1, -1];
  }

  /**
   * one pass solution
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const numToFirstIndex = new Map();
    for (let i = 0; i < nums.length; i++) {
      const pairIndex = numToFirstIndex.get(target - nums[i]);
      if (pairIndex !== undefined) {
        return [pairIndex, i];
      }
      numToFirstIndex.set(nums[i], i);
    }
    return [-1, -1];
  }

  /**
   * two pointer solution
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const numsWithIndices = nums
      .map((value, index) => ({
        value,
        index,
      }))
      .sort((a, b) => a.value - b.value);
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
      const sum = numsWithIndices[left].value + numsWithIndices[right].value;
      if (sum === target)
        return [numsWithIndices[left].index, numsWithIndices[right].index];
      if (sum > target) right--;
      else left++;
    }
    return [-1, -1];
  }
}
