class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    let total = 0;
    let left = 0;
    let right = 1;
    let currentArea = 0;
    while (right < height.length) {
      if (height[right] >= height[left]) {
        left = right;
        right++;
        total += currentArea;
        currentArea = 0;
      } else {
        currentArea += height[left] - height[right];
        right++;
      }
    }
    right--;
    while (left < right) {
      total += Math.max(height[right] - height[left], 0);
      left++;
    }
    return total;
  }
}

console.log(new Solution().trap([0, 2, 0, 3, 1, 0, 1, 3, 2, 1]));
console.log(new Solution().trap([0,1,0,2,1,0,1,3,2,1,2,1]));
