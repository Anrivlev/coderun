/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const sortedNums = [];
  let i = 0;
  let j = 0;
  while (i < m && j < n) {
    const num1 = nums1[i];
    const num2 = nums2[j];
    if (num1 <= num2) {
      sortedNums.push(num1);
      i++;
    } else {
      sortedNums.push(num2);
      j++;
    }
  }
  if (i !== m) {
    sortedNums.push(...nums1.slice(i, m));
  }
  if (j !== n) {
    sortedNums.push(...nums2.slice(j, n));
  }
  nums1.splice(0, m + n, ...sortedNums);
  return nums1;
};

const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
console.log(merge(nums1, m, nums2, n));
