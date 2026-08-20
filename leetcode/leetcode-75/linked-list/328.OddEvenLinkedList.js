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
var oddEvenList = function (head) {
  if (head === null) return null;
  if (head.next === null) return head;
  const oddHead = head;
  const evenHead = head.next;
  let oddTail = oddHead;
  let evenTail = evenHead;
  let current = evenTail.next;
  while (current !== null) {
    oddTail.next = current;

    oddTail = oddTail.next;

    current = current.next;
    if (current === null) break;

    evenTail.next = current;
    evenTail = evenTail.next;

    current = current.next;
  }

  oddTail.next = evenHead;
  evenTail.next = null;

  return oddHead;
};
