class Solution {
  /**
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
}
