/*
 * Binary Search
 */
function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length-1;
    
    while (left <= right) {
        const mid = Math.round((left+right)/2);

        if (nums[mid] === target) return mid;

        // Left sorted portion
        if (nums[left] <= nums[mid]) {
            if (target > nums[mid] || target < nums[left]) 
                left = mid + 1;
            else 
                right = mid - 1;
        // Right sorted portion
        } else {
            if (target < nums[mid] || target > nums[right]) 
                right = mid - 1;
            else 
                left = mid + 1;
        }
    }
    
    return -1
};

/* 
 * Time & Space Complexities
 */
// n = length of nums

// Brute:
// Time: O(n^2)
// Space: O(1)

// Binary Search:
// Time: O(logn)
// Space: O(1)
