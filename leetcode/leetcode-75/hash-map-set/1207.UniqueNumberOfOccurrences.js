/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const occurrences = new Map();
  arr.forEach((value) => {
    const count = occurrences.get(value) ?? 0;
    occurrences.set(value, count + 1);
  });
  const occurenciesSet = new Set();
  const occurrencesEntries = Array.from(occurrences.entries());
  for (const [key, value] of occurrencesEntries) {
    if (occurenciesSet.has(value)) return false;
    occurenciesSet.add(value);
  }
  return true;
};
