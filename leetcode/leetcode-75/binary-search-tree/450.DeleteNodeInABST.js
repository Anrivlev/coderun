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
  if ((node.left && !node.right) || (!node.left && node.right)) {
    if (parent.left === node) parent.left = node.left ?? node.right;
    else parent.right = node.left ?? node.right;
    return;
  }
  if (node.left) {
    const rightmostResult = findRightmost(node.left);
    node.val = rightmostResult.node.val;
    deleteNodeFromParent(rightmostResult.node, rightmostResult.parent);
  } else if (parent) {
    deleteNodeFromParent(node, parent);
  }
}

function deleteNodeFromParent(node, parent) {
  if (parent.left === node) parent.left = null;
  else parent.right = null;
}

function findRightmost(node, parent) {
  if (node.right === null) return { node, parent };
  return findRightmost(node.right, node);
}

function findLeftmost(node) {
  if (node.left === null) return node;
  return findLeftmost(node.left);
}

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
  if (root.val === key) return null;
  let current = root;
  while (current) {
    if (current.val < key) {
      const { left } = current;
      if (!left) return root;
      if (left.val === key) {
        if (!left.left && !left.right) {
          current.left = null;
        } else if (left.left && left.right) {
          const rightmost = findRightmost(left.left, current);
          left.val = rightmost.node.val;
          deleteNodeFromParent(rightmost.node, rightmost.parent);
        } else if (left.left) {
          current.left = left.left;
        } else {
          current.left = left.right;
        }
        return root;
      } else current = left;
    } else {
      const { right } = current;
      if (!right) return root;
      if (right.val === key) {
        if (!right.left && !right.right) {
          current.right = null;
        } else if (right.left && right.right) {
          const rightmost = findRightmost(right.left, current);
          right.val = rightmost.node.val;
          deleteNodeFromParent(rightmost.node, rightmost.parent);
        } else if (right.left) {
          current.right = right.left;
        } else {
          current.right = right.right;
        }
        return root;
      } else current = right;
    }
  }

  return root;
};
