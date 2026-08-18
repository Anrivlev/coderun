/** @returns Boolean */
module.exports = function (nums, k) {
  // ваш код здесь
  const foundNums = new Set();
  for (let num of nums) {
    if (foundNums.has(k - num)) return true;
    foundNums.add(num);
  }

  return false;
};
