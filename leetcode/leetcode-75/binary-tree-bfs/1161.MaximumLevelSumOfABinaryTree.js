/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
  if (root === null) return 0;
  let layer = [root];
  let maxSum = -Infinity;
  let levelOfMaxSum = 0;
  let level = 1;
  while (layer.length > 0) {
    const sum = layer.reduce((a, b) => a + b.val, 0);
    if (sum > maxSum) {
      maxSum = sum;
      levelOfMaxSum = level;
    }
    layer = layer
      .flatMap((node) => [node.left, node.right])
      .filter((node) => node !== null);
    level++;
  }
  return levelOfMaxSum;
};
