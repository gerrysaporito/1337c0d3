/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/*
 * Iteration
 */
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let tail = new ListNode();
    const head = tail;
    
    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }

    if (l1) tail.next = l1;
    if (l2) tail.next = l2;
    
    return head.next;
};

/* 
 * Time & Space Complexities
 */
// n = number of nodes in l1
// m = number of nodes in l2

// Iteration:
// Time: O(n+m)
// Space: O(1)
