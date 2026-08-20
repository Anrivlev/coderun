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
var goodNodes = function (root) {
  const stack = [{ node: root, max: root.val }];
  let goodNodeCount = 0;
  while (stack.length > 0) {
    const { node, max } = stack.pop();
    if (node.val >= max) goodNodeCount++;

    if (node.right)
      stack.push({ node: node.right, max: Math.max(max, node.right.val) });
    if (node.left)
      stack.push({ node: node.left, max: Math.max(max, node.left.val) });
  }
  return goodNodeCount;
};
