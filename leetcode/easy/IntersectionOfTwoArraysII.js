/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const numberCountMap = new Map();
  for (const num of nums1) {
    const count = numberCountMap.get(num) ?? 0;
    numberCountMap.set(num, count + 1);
  }

  const intersection = [];

  for (const num of nums2) {
    const count = numberCountMap.get(num) ?? 0;
    if (count > 0) {
      numberCountMap.set(num, count - 1);
      intersection.push(num);
    }
  }

  return intersection;
};
