/**
 * Я не понял этого решения, но оно работает. Потом снова посмотрю.
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  if (prices.length === 0) return 0;
  let sell = 0;
  let buy = -Infinity;
  for (const price of prices) {
    buy = Math.max(buy, sell - price);
    sell = Math.max(sell, buy + price - fee);
    console.log(buy, sell);
  }
  return sell;
};

console.log(maxProfit([1, 4, 7, 8, 10, 1, 2, 3], 4));
