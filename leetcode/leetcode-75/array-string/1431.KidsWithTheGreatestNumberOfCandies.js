/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const maxCandies = Math.max(...candies);
    const result = candies.map(candyCount => candyCount + extraCandies >= maxCandies);
    return result
};