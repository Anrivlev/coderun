var StockSpanner = function () {
  this.prices = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let count = 1;
  for (let i = this.prices.length - 1; i >= 0; i--) {
    if (price < this.prices[i]) break;
    count++;
  }
  this.prices.push(price);
  return count;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
