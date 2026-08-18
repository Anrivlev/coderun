/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return buildNode(nums, 0, nums.length);
};

function buildNode(nums, leftIndex, rightIndex) {
  if (nums.length === 0) return null;
  if (leftIndex === rightIndex) return null;
  const mid = Math.floor((leftIndex + rightIndex) / 2);

  const val = nums[mid];
  const left = buildNode(nums, leftIndex, mid);
  const right = buildNode(nums, mid + 1, rightIndex);

  return { val, left, right };
}

const nums = [-10, -3, 0, 5, 9];
console.log(sortedArrayToBST(nums));
