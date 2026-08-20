/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Итеративное решение
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) return 0;
  const stack = [{ node: root, depth: 1 }];
  let maxDepth = 1;
  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    if (depth > maxDepth) maxDepth = depth;
    if (node.left) stack.push({ node: node.left, depth: depth + 1 });
    if (node.right) stack.push({ node: node.right, depth: depth + 1 });
  }
  return maxDepth;
};

/**
 * Рекурсивное решение
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) return 0;
  const left = maxDepth(root.left) + 1;
  const right = maxDepth(root.right) + 1;
  return Math.max(left, right);
};
