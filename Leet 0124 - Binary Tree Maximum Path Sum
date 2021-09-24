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
function maxPathSum(root: TreeNode | null): number {
    let max = root?.val;

    const maxPath = (root) => {
        if (!root) return 0;

        const leftPath = Math.max(0, maxPath(root.left));
        const rightPath = Math.max(0, maxPath(root.right));
        max = Math.max(max, root.val + leftPath + rightPath);

        return root.val + Math.max(leftPath, rightPath);
    }
    
    maxPath(root);
    return max;
};

/* 
 * Time & Space Complexities
 */
// n = length of string

// Recursion
// Time: O(n)
// Space: O(n)
