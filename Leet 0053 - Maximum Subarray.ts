/*
 * Kadane's Algorithm
 */
function maxSubArray(nums: number[]): number {    
    let max = nums[0];
    let sum = 0;
    
    for (const num of nums) {
        if (sum < 0) sum = 0;
        sum += num;
        if (sum > max) max = sum;
    }
    
    return max;
};

/*
 * Tabulation
 */
function maxSubArray(nums: number[]): number {
    const table = Array(nums.length).fill(0);
    
    let sum = 0;
    
    for (let i = 0; i < nums.length; ++i) {
        sum += nums[i];
        table[i] = sum;
        
        if (sum <= 0) sum = 0;
    }
    
    return Math.max(...table);
};

/* 
 * Time & Space Complexities
 */
// n = length of nums

// Brute:
// Time: O(n^2)
// Space: O(n)

// Tabulation
// Time: O(n)
// Space: O(n)

// Kadane's
// Time: O(n)
// Space: O(1)
