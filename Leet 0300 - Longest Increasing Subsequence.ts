
/* 
 * Brute Force
 */
function lengthOfLIS(nums: number[]): number {    
    const helper = (nums: number[], subsequence: number[], currIndex: number): number[] => {
        // Check if we are at the end of the list
        if (currIndex >= nums.length) return subsequence;
        
        // Set the largest subsequence to the base value (passed down subsequence)
        let largestSubsequence = [...subsequence];

        // Iterate over nums from the current index to the end of list
        for(let i = currIndex; i < nums.length; ++i) {
            // Check if the subsequence is empty OR if the last number in the subsequence is less than the current number
            if (subsequence.length === 0 || subsequence[subsequence.length-1] < nums[i]) {
                // Create the new subsequence by recursively calculating the next
                const currSubsequence = helper(nums, [...subsequence, nums[i]], i);
                
                // Compare against the largest seen subsequence and update if necessary
                if(largestSubsequence.length < currSubsequence.length) {
                    largestSubsequence = currSubsequence
                }
            }
        }
        
        return largestSubsequence
    }
    
    return helper(nums, [], 0).length
};

/* 
 * Tabulation
 */
function lengthOfLIS(nums: number[]): number {    
    let table: number[] = Array(nums.length + 1).fill(1);
    
    // Iterate backwards from end of list
    for (let i = nums.length; i >= 0; --i) {
        // Iterate forwards from current index
        for (let j = i + 1; j < nums.length; ++j) {
            // Check if the current index's value is less than the sliding window's value
            if (nums[i] < nums[j]) {
                // Set the current index's value to whichever has the higher count
                table[i] = Math.max(table[i], table[j] + 1);
            }
        }
    }
    
    console.log(table)
    
    return Math.max(...table)
};

/* 
 * Time & Space Complexities
 */
// n = length of nums

// Brute:
// Time: O(n*n^logn)
// Space: O(n)

// Tabulation
// Time: O(n^2)
// Space: O(n)
