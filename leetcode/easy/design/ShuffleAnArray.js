/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
  this.initialState = nums.slice();
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.nums.splice(0, this.nums.length, ...this.initialState);
  return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  for (let i = this.nums.length - 1; i > 0; i--) {
    const j = getRandomIndex(0, i + 1);
    const swapped = this.nums[i];
    this.nums[i] = this.nums[j];
    this.nums[j] = swapped;
  }
  return this.nums;
};

function getRandomIndex(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
