/*
 * Hashmap
 */
function containsDuplicate(nums: number[]): boolean {        
    const memo: { [key: string]: number } = {};
    
    for (const num of nums) {
        num in memo ? memo[num]++ : memo[num] = 1;
    }
    
    const maxCount = Math.max(...Object.values(memo));
    return maxCount >= 2;
};

/* 
 * Time & Space Complexities
 */
// n = length of nums

// Brute:
// Time: O(n^2)
// Space: O(1)

// Hashmap
// Time: O(n)
// Space: O(1)
