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
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    const isSameTree = (root: TreeNode | null, subRoot: TreeNode | null) => {
        if (!root && !subRoot) return true;
        if (root?.val !== subRoot?.val) return false;
            
        return isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right);
    }
    
    const stack = [root];
    
    while (stack.length) {
        const node = stack.pop();
        
        if (node) {
            if (isSameTree(node, subRoot)) return true;
            stack.push(node?.left, node?.right);
        }
    }
    
    return false;
};

/* 
 * Time & Space Complexities
 */
// n = number of nodes in tree
// m = number of nodes in subtree

// Recursion
// Time: O(m*n)
// Space: O(n)
 
