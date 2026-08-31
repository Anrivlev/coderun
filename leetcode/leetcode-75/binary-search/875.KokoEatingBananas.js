/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  if (piles.length > h) return 0; // -1 or undefined
  let maxK = Math.max(...piles);
  if (piles.length === h) return maxK;

  let minK = 1;
  while (minK < maxK) {
    let midK = Math.floor((minK + maxK) / 2);
    const midH = countHours(piles, midK);
    if (midH > h) {
      minK = midK + 1;
    } else {
      maxK = midK;
    }
  }
  return minK;
};

function countHours(piles, k) {
  return piles.reduce((prev, curr) => prev + Math.ceil(curr / k), 0);
}

console.log(minEatingSpeed([3, 6, 7, 11], 8));
