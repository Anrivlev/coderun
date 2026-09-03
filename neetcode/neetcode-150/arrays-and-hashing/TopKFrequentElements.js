class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const frequencies = new Map();
    for (const num of nums) {
      const count = frequencies.get(num) ?? 0;
      frequencies.set(num, count + 1);
    }
    const sortedFrequencies = Array.from(frequencies.entries()).sort(
      (a, b) => b[1] - a[1],
    );
    return sortedFrequencies.slice(0, k).map((a) => a[0]);
  }
}
