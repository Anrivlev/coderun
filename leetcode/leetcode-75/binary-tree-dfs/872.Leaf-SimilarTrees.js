/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const leaves1 = getLeaves(root1);
  const leaves2 = getLeaves(root2);
  return (
    leaves1.length === leaves2.length &&
    leaves1.every((value, index) => leaves2[index].val === value.val)
  );
};

function getLeaves(root) {
  const stack = [root];
  const leaves = [];
  while (stack.length > 0) {
    const node = stack.pop();
    if (!node.left && !node.right) leaves.push(node);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return leaves;
}

const root1 = {
  val: 1,
  left: null,
  right: null,
};
console.log(getLeaves(root1));

// Было бы круто придумать решение с yield и итераторами.
