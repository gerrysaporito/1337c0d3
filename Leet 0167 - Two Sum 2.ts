/*
 * Two Pointer
 */
function twoSum(nums: number[], target: number): number[] {
    let i = 0;
    let j = nums.length - 1;
    
    while (i < j) {
        const left = nums[i];
        const right = nums[j];
        const sum = left + right;
        
        console.log(left, right, sum)

        if (sum > target) {
            j--;
        } else if (sum < target) {
            i++;
        } else {
            return [i+1, j+1];
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

// Two Pointer:
// Time: O(n)
// Space: O(1)
