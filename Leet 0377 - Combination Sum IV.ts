/*
 * Tabulation
 */
function combinationSum4(nums: number[], target: number): number {
    const table = Array(target + 1).fill(0);
    table[0] = 1;
    
    for (let i = 0; i < table.length; ++i) {
        for (let num of nums) {
            if (i + num < table.length) {
                table[i + num] += table[i]
            }
        }
    }
    
    return table[target];
};

/* 
 * Memoization
 */
function combinationSum4(nums: number[], target: number, memo={}): number {
    if (target in memo) return memo[target];
    if (target === 0) return 1;
    if (target < 0) return 0;
    
    let count = 0;
    
    for (let num of nums) {
        const newTarget = target - num;
        count += combinationSum4(nums, newTarget, memo);
    }
    
    memo[target] = count;
    return memo[target]
};

/* 
 * Time & Space Complexities
 */
// m = worst case of target (target - 1 for every step)
// n = length of nums

// Brute:
// Time: O(m*n^2)
// Space: O(m)

// Memoization
// Time: O(m*n)
// Space: O(m)

// Tabulation
// Time: O(m*n)
// Space: O(m)
