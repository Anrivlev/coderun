/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  return getCombinations(k, n, 9);
};

function getCombinations(k, n, maxDigit) {
  if (k === 1) {
    if (n < 1 || n > maxDigit) return [];
    return [[n]];
  }
  const combinations = [];
  for (let i = maxDigit; i > 0; i--) {
    const endings = getCombinations(k - 1, n - i, i - 1);
    if (endings.length === 0) continue;
    endings.forEach((ending) => combinations.push([i, ...ending]));
    // Сначала отправил с этой строчкой, но она оказалась супер медленной. Верхняя строчка быстрее.
    // combinations.push(...endings.map((ending) => [i, ...ending]));
  }
  return combinations;
}

console.log(combinationSum3(3, 7));
console.log(combinationSum3(9, 45));
