/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 === null && list2 === null) return null;
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  let ptr1 = list1;
  let ptr2 = list2;
  let head = null;
  let current = null;
  while (ptr1 !== null && ptr2 !== null) {
    if (ptr1.val < ptr2.val) {
      if (current === null) {
        current = ptr1;
        head = current;
      } else {
        current.next = ptr1;
        current = current.next;
      }
      ptr1 = ptr1.next;
    } else {
      if (current === null) {
        current = ptr2;
        head = current;
      } else {
        current.next = ptr2;
        current = current.next;
      }
      ptr2 = ptr2.next;
    }
  }
  if (ptr1 !== null) {
    current.next = ptr1;
  }
  if (ptr2 !== null) {
    current.next = ptr2;
  }

  return head;
};
