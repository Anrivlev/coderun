/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head === null) return false;
  let prev = null;
  let current = head;
  let next = current.next;
  while (next !== null) {
    current.next = prev;

    prev = current;
    current = next;
    next = next.next;

    if (current === head) return true;
  }
  return false;
};
