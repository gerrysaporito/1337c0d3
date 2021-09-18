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
 * Divide and Conquer
 */
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const merge = (l1: ListNode, l2: ListNode) => {
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
    }
    
    while (lists.length > 1) {
        const mergedLists = [];
        
        for (let i = 0; i < lists.length; i += 2) {
            let l1 = lists[i];
            let l2 = i+1 < lists.length ? lists[i+1] : null
            mergedLists.push(merge(l1, l2));
        }
        
        lists = mergedLists;
    }
    
    return lists[0] || null;
};

/* 
 * Time & Space Complexities
 */
// n = number of lists in lists
// m = number of nodes in longest list

// Divide and Conquer:
// Time: O(mlog(n))
// Space: O(1)
