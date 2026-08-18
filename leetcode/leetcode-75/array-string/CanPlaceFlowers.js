/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (n === 0) return true;
  let isPrevPlanted = false;
  let plantedCount = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      !isPrevPlanted &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      plantedCount++;
      isPrevPlanted = true;
    } else {
      isPrevPlanted = flowerbed[i] === 1;
    }
    if (plantedCount === n) return true;
  }
  return false;
};

const flowerbed = [1, 0, 0, 0, 1, 0, 0];
const n = 2;
console.log(canPlaceFlowers(flowerbed, n));
