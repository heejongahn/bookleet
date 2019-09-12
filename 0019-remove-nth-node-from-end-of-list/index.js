// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
  if (head.next == null) {
    return null;
  }

  const start = {
    value: null,
    next: head
  };

  let fast = start;
  let slow = start;

  // `slow`: the (n + 1)-th node from the tail
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast.next != null) {
    fast = fast.next;
    slow = slow.next;
  }

  // Skip `slow.next`, which is the n-th node from the tail
  slow.next = slow.next.next;

  return start.next;
};
