class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    const unique = new Set(nums);
    let maxLength = 0;
    for (const value of unique) {
      if (unique.has(value - 1)) continue;
      let last = value;
      while (unique.has(last)) {
        last++;
      }
      const length = last - value;
      if (length > maxLength) maxLength = length;
    }

    return maxLength;
  }
}
