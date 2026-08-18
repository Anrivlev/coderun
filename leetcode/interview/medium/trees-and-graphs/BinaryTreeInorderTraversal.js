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
var inorderTraversal = function (root) {
  const stack = [];
  const result = [];
  let node = root;
  while (node || stack.length > 0) {
    while (node !== null) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop();
    result.push(node.val);
    node = node.right;
  }

  return result;
};
