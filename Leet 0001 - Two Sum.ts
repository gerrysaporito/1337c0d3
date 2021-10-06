/*
 * Hashmap
 */
function twoSum(nums: number[], target: number): number[] {
    const hash = {};
    
    for (let i = 0; i < nums.length; ++i) {
        const newTarget = target - nums[i];
        
        if (newTarget in hash) {
            return [hash[newTarget], i]            
        } else {
            hash[nums[i]] = i;
        }
    }
};

/* 
 * Time & Space Complexities
 */
// n = length of nums

// Brute:
// Time: O(n^2)
// Space: O(1)

// Hashmap:
// Time: O(n)
// Space: O(1)
