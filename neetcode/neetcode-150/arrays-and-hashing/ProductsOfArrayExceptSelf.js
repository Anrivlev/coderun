class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    const leftProducts = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
      leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
    }
    let rightProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
      leftProducts[i] *= rightProduct;
      rightProduct *= nums[i];
    }
    return leftProducts;
  }
}
