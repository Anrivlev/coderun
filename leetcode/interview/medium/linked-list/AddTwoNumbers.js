/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let ptr1 = l1;
  let ptr2 = l2;

  const sumHead = { val: 0, next: null };
  let sumPtr = null;
  let remainder = 0;
  while (ptr1 !== null || ptr2 !== null) {
    let val = (ptr1?.val ?? 0) + (ptr2?.val ?? 0) + remainder;
    if (val > 9) {
      val -= 10;
      remainder = 1;
    } else remainder = 0;

    if (sumPtr === null) {
      sumPtr = sumHead;
      sumPtr.val = val;
    } else {
      const next = { val, next: null };
      sumPtr.next = next;
      sumPtr = next;
    }

    ptr1 = ptr1?.next ?? null;
    ptr2 = ptr2?.next ?? null;
  }

  if (remainder === 1) {
    sumPtr.next = {
      val: 1,
      next: null,
    };
  }

  return sumHead;
};
