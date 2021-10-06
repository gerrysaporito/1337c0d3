/*
 * Tabulation
 */
function maxProduct(nums: number[]): number {
    const max = Array(nums.length+1).fill(1);
    const min = Array(nums.length+1).fill(1);
    
    for (let i = 0; i < nums.length; ++i) {
        max[i+1] = Math.max(nums[i], nums[i]*max[i], nums[i]*min[i]);
        min[i+1] = Math.min(nums[i], nums[i]*max[i], nums[i]*min[i]);
    }
    
    return Math.max(...max.slice(1), ...min.slice(1))
};

/* 
 * Time & Space Complexities
 */
// n = length of nums

// Brute:
// Time: O(n^2)
// Space: O(1)

// Tabulation:
// Time: O(n)
// Space: O(n)
