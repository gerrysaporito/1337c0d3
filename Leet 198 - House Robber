/*
 * Brute Force
 */
function rob(nums: number[], currIndex=0, count=0): number {
    if (currIndex >= nums.length) return count;
    
    let maxCount = 0;
    
    for (let i = currIndex; i < nums.length; ++i) {
        const newCount = rob(nums, i + 2, count + nums[i]);
        
        if (newCount > maxCount) {
            maxCount = newCount
        }
    }
    
    return maxCount;
};

/*
 * Tabulation
 */
function rob(nums: number[]): number {
    let table = Array(nums.length + 1).fill(0);
    
    for (let i = 0; i < nums.length; ++i) {
        table[i+1] = nums[i];
    }
    
    for (let i = 0; i < table.length; ++i) {
        if (i + 2 < table.length) {
            table[i + 2] = Math.max(table[i] + table[i + 2], table[i + 1]);
        }
    }
    
    return Math.max(...table);
};

/* 
 * Time & Space Complexities
 */
// n = length of nums

// Brute:
// Time: O(n^2)
// Space: O(m)

// Tabulation
// Time: O(n^2)
// Space: O(m)
