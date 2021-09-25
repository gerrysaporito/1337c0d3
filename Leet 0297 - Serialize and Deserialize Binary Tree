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
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    const preOrderTraversalSerialize = (node: TreeNode | null): string[] => {
        if (!node) return ['N'];
        
        return [node.val.toString(), ...preOrderTraversalSerialize(node.left), ...preOrderTraversalSerialize(node.right)]
    }
    
    return preOrderTraversalSerialize(root).join(',');
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    let i = 0;
    
    const preOrderTraversalDeserialize = (data: string[]) => {
        const value = data[i];
        i++;

        if (value === 'N') {
            return null;
        }
        
        const node = new TreeNode(parseInt(value));
        node.left = preOrderTraversalDeserialize(data);
        node.right = preOrderTraversalDeserialize(data);
        
        return node
    }
        
    return preOrderTraversalDeserialize(data.split(','));
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

/* 
 * Time & Space Complexities
 */
// n = number of nodes

// Depth First Search - Pre Order Traversal:
// Time: O(n)
// Space: O(n)
