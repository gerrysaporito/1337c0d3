/*
 * Sliding Window
 */
function smallestDivisor(nums: number[], threshold: number): number {
    const isValid = (nums: number[], threshold: number, divisor: number) => {
        const quotients = nums.map(num => Math.ceil(num/divisor));
        const sum = quotients.reduce((store, val) => store+val, 0);
        return sum <= threshold;
    }
    
    let minDiv = 1;
    let maxDiv = Math.max(...nums);
    
    while (minDiv < maxDiv) {
        const div = Math.floor((minDiv+maxDiv)/2);

        if (isValid(nums, threshold, div)) {
            maxDiv = div;
        } else {
            minDiv = div+1;
        }
    }
    
    return minDiv;
};

/* 
 * Time & Space Complexities
 */
// n = length of nums

// Brute Force:
// Time: O(n)
// Space: O(n)

// Sliding Window:
// Time: O(log(n))
// Space: O(n)
