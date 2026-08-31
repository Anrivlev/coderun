/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  const n = spells.length;
  const m = potions.length;

  potions.sort((a, b) => b - a); // desc sort

  return spells.map((spell) => {
    const target = success / spell;

    let left = 0;
    let right = potions.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      const potion = potions[mid];
      if (potion >= target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return right;
  });
};

console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7));
