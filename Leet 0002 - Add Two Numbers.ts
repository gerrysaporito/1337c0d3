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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode();
    let head = dummy;
    let carry = 0;
    
    while (l1 || l2) {
        const l1Val = l1?.val || 0;
        const l2Val = l2?.val || 0;
        const val = (l1Val + l2Val + carry) % 10;
        
        const newNode = new ListNode(val);
        
        carry = Math.floor((l1Val + l2Val + carry) / 10);
        head.next = newNode;
        
        head = head.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    
    if (carry > 0) {
        const newNode = new ListNode(carry); 
        head.next = newNode;
    }
    
    return dummy.next;
};

/* 
 * Time & Space Complexities
 */
// n = number of nodes in l1
// m = number of nodes in l2

// Brute Force:
// Time: O(n+m)
// Space: O(Max(n, m))
