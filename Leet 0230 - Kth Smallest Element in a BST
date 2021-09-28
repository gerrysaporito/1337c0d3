/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/*
 * Recursion
 */
function kthSmallest(root: TreeNode | null, k: number): number {
    
    const inorderTraversal = (root: TreeNode | null) => {
        if (!root) return [];
        
        return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
    }
    
    const nums = inorderTraversal(root);
    
    return nums[k-1]
};

/*
 * Time & Space Complexities
 */
// n = max depth of tree

// Recursion
// Time: 0(n)
// Space: 0(n)
