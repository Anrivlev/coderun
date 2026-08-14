const IS_NOT_CHECKED = 0;
const IS_NOT_PRIME = 1;
const IS_PRIME = 2;

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const statuses = new Array(n + 1).fill(IS_NOT_CHECKED);
  for (let i = 2; i < n; i++) {
    const status = statuses[i];
    if (status === IS_NOT_PRIME) continue;
    if (status === IS_NOT_CHECKED) {
      statuses[i] = IS_PRIME;
      for (let j = i * 2; j < n; j += i) {
        statuses[j] = IS_NOT_PRIME;
      }
    }
  }
  return statuses.filter((status) => status === IS_PRIME).length;
};

console.log(countPrimes(3));
