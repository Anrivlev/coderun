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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (root === null) return [];
  let layer = [root];
  const answer = [];
  while (layer.length > 0) {
    answer.push(layer.at(-1).val);
    layer = layer
      .flatMap((node) => [node.left, node.right])
      .filter((node) => node !== null);
  }
  return answer;
};
