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
function isValidBST(root: TreeNode | null): boolean {
    const dfs = (root: TreeNode | null, max: number = Infinity, min: number = -Infinity) => {
        if (!root) return true;
        if (root.val >= max || root.val <= min) return false;
        
        const isLeftValid = dfs(root.left, root.val, min);
        const isRightValid = dfs(root.right, max, root.val);
        
        return isLeftValid && isRightValid;
    }
    
    return dfs(root);
};

/* 
 * Time & Space Complexities
 */
// n = number of nodes in tree

// Recursion:
// Time: O(n)
// Space: O(n)
