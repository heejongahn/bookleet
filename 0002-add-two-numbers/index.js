// https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const beforeResult = { next: null };

  let overflow = false;
  let curr = beforeResult;

  while (l1 != null || l2 != null || overflow) {
    let current = overflow ? 1 : 0;

    if (l1 != null) {
      current = current + l1.val;
      l1 = l1.next;
    }

    if (l2 != null) {
      current = current + l2.val;
      l2 = l2.next;
    }

    curr.next = {
      val: current % 10,
      next: null
    };

    overflow = current >= 10;
    curr = curr.next;
  }

  return beforeResult.next;
};
