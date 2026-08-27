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
var longestZigZag = function (root) {
  if (root === null) return 0;
  const stack = [];
  let maxLength = 0;
  if (root.left) stack.push({ node: root.left, length: 1, direction: "left" });
  if (root.right)
    stack.push({ node: root.right, length: 1, direction: "right" });
  while (stack.length > 0) {
    const { node, length, direction } = stack.pop();
    if (length > maxLength) maxLength = length;
    if (node.left) {
      stack.push({
        node: node.left,
        length: direction === "left" ? 1 : length + 1,
        direction: "left",
      });
    }
    if (node.right) {
      stack.push({
        node: node.right,
        length: direction === "right" ? 1 : length + 1,
        direction: "right",
      });
    }
  }

  return maxLength;
};
