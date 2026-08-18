var MinStack = function () {
  this.stack = [];
};

/**
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function (value) {
  const min = Math.min(this.stack.at(-1)?.min ?? Infinity, value);
  const valueWithMin = {
    value,
    min,
  };
  this.stack.push(valueWithMin);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack.at(-1).value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack.at(-1).min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
