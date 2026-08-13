/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     if (prices.length < 2) return 0;
//     const totalProfit = 0;
//     let buyPrice = prices[0];
//     for (let i = 1; i < prices.length; i++) {
//         const price = prices[i];
//         const prevPrice = prices[i - 1];
//         if (price === prevPrice) continue;
//         if (price > prevPrice) {

//         }
//         else if (price < prevPrice) {
//             if (prevPrice === buyPrice) {
//                 buyPrice = price
//             } else {
//                 const priceDifference = buyPrice - prevPrice;
//             }
//         }
//     }
// };

var maxProfit = function (prices) {
  if (prices.length < 2) return 0;
  let totalProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];
    const prevPrice = prices[i - 1];
    const difference = price - prevPrice;
    if (difference > 0) totalProfit += difference;
  }
  return totalProfit;
};

// const prices = [1, 2, 3, 4, 5];
// const prices = [7, 6, 4, 3, 1];
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
