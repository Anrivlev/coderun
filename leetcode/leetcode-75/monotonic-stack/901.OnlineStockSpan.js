var StockSpanner = function () {
  this.prices = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let span = 1;
  while (this.prices.length > 0 && this.prices.at(-1).price <= price) {
    const prev = this.prices.pop();
    span += prev.span;
  }

  this.prices.push({ price, span });
  return span;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
