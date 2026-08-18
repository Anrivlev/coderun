/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null) return null;
  let prev = null;
  let curr = head;
  let next = head.next;
  while (next !== null) {
    curr.next = prev;

    prev = curr;
    curr = next;
    next = next.next;
  }
  curr.next = prev;
  return curr;
};

const node5 = { val: 5, next: null };
const node4 = { val: 4, next: node5 };
const node3 = { val: 3, next: node4 };
const node2 = { val: 2, next: node3 };
const head = { val: 1, next: node2 };

const newHead = reverseList(head);
console.log(newHead);
