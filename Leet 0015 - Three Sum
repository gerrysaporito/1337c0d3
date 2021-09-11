/*
 * Two Pointer
 */
function threeSum(nums: number[]): number[][] {
    const sums = [];
    
    nums.sort((a,b) => a-b)

    for (let i = 0; i < nums.length; ++i) {
        let curr = nums[i];
        let left = i+1;
        let right = nums.length-1;
        
        if (nums[i] === nums[i-1]) continue;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum < 0) left++;
            if (sum > 0) right--;
            if (sum === 0) {
                sums.push([curr, nums[left], nums[right]]);
                
                left++;
                while (nums[left] === nums[left-1] && left < right) {
                    left++;
                }
            }
        }
    }
        
    return sums;
};

/* 
 * Time & Space Complexities
 */
// n = length of nums

// Brute:
// Time: O(n^3)
// Space: O(1)

// Two Pointer:
// Time: O(n^2)
// Space: O(1)
