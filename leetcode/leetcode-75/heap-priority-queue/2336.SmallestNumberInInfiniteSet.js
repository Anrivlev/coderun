var SmallestInfiniteSet = function () {
  this.current = 1;
  this.queue = new MinHeap();
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
  if (this.queue.isEmpty()) return this.current++;
  const value = this.queue.pop();
  while (this.queue.top() === value) this.queue.pop();
  return value;
};

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
  if (this.current > num) this.queue.insert(num);
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
