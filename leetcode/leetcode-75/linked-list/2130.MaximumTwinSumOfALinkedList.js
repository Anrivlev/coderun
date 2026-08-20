/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  if (head === null) return 0;
  const middle = findMiddle(head);
  const tail = reverseList(middle);

  let curr1 = head;
  let curr2 = tail;
  let maxSum = -Infinity;
  while (curr1 !== null && curr2 !== null) {
    const sum = curr1.val + curr2.val;
    if (sum > maxSum) maxSum = sum;
    curr1 = curr1.next;
    curr2 = curr2.next;
  }
  reverseList(tail);
  return maxSum;
};

function findMiddle(head) {
  if (head === null) return null;
  if (head.next === null) return head;
  let slow = head;
  let fast = head.next.next;
  while (fast !== null) {
    fast = fast.next;
    if (fast === null) break;
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
}

function reverseList(head) {
  if (head === null) return null;
  let prev = null;
  let curr = head;
  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
