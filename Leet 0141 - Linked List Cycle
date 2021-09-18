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
 * Hash Set
 */
function hasCycle(head: ListNode | null): boolean {
    const visited = new Set();
    
    while (head !== null) {
        if (visited.has(head)) return true;
        visited.add(head)
        head = head.next;
    }
    
    return false;
};

/*
 * Two Pointer
 */
function hasCycle(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next

        if (slow === fast) return true;
    }
    
    return false;
};


/* 
 * Time & Space Complexities
 */
// n = number of nodes

// Hash Set:
// Time: O(n)
// Space: O(n)

// Two Pointer:
// Time: O(n)
// Space: O(1)
