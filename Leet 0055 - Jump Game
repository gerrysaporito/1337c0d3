/*
 * Tabulation
 */
const canJump = (nums: number[]): boolean => {
    let table = Array(nums.length).fill(0);
    table[0] = 1;
    
    for (let i = 0; i < table.length; ++i) {
        const jump = nums[i]
        for (let j = i + 1; j <= i + jump; ++j) {
            if (j < table.length) {
                table[j] += table[i];
            }
        }
    }
    
    return table[table.length-1] > 0;
};

/*
 * Memoization
 */
const canJump = (nums: number[], memo={}): boolean => {
    const key = nums.join(',');
    if (key in memo) return memo[key];
    
    if (nums.length === 1) return true;
    if (nums.length > 1 && nums[0] === 0) return false;
    
    let possibleJump = false;
    
    for (let i = 1; i <= nums[0]; ++i ) {
        const newNums = nums.slice(i);
        possibleJump = canJump(newNums, memo) || possibleJump;
    }
    
    memo[key] = possibleJump;
    return memo[key];
};

/* 
 * Time & Space Complexities
 */
// n = length nums

// Brute:
// Time: O(n^3)
// Space: O(n)

// Memoization
// Time: O(n*n)
// Space: O(n)

// Tabulation
// Time: O(n*n)
// Space: O(n)
