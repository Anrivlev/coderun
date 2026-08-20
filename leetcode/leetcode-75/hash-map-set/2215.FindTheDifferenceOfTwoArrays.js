/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const nums1Set = new Set(nums1);
  const nums2Set = new Set(nums2);
  const answer = [[], []];
  nums1Set.forEach((value) => {
    if (!nums2Set.has(value)) answer[0].push(value);
  });
  nums2Set.forEach((value) => {
    if (!nums1Set.has(value)) answer[1].push(value);
  });
  return answer;
};
