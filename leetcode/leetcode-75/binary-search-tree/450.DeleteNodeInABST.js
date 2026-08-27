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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (root === null) return null;
  const { node: keyNode, parent: keyNodeParent } = findNodeWithParent(
    root,
    key,
    null,
  );
  if (keyNode === null) return root;

  balanceNode(keyNode, keyNodeParent);

  return root;
};

function findNodeWithParent(node, key, parent) {
  if (node === null) return { node: null, parent };
  if (node.val === key) return { node, parent };
  if (node.val < key) return findNodeWithParent(node.left, key, node);
  return findNodeWithParent(node.right, key, node);
}

function balanceNode(node, parent) {
  if (node === null) return;
  if (node.right) {
    node.val = node.right.val;
    balanceNode(node.right, node);
  } else if (node.left) {
    node.val = node.left.val;
    balanceNode(node.left, node);
  } else if (parent) {
    if (parent.left === node) parent.left = null;
    else parent.right = null;
  }
}
