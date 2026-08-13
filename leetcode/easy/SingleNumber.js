/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const twiceRepeated = new Set();
  const onceRepeated = new Set();
  nums.forEach((num) => {
    if (twiceRepeated.has(num)) return;
    if (onceRepeated.has(num)) {
      onceRepeated.delete(num);
      twiceRepeated.add(num);
    } else {
      onceRepeated.add(num);
    }
  });

  return Array.from(onceRepeated.values()).at(0);
};

const nums = [2, 2, 1];
console.log(singleNumber(nums));
