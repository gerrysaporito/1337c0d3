/*
 * Brute
 */
function productExceptSelf(nums: number[]): number[] {
    const answer = Array(nums.length).fill(1);
    let preProd = 1;
    let postProd = 1;
    
    const preArr = Array(nums.length).fill(1);
    const postArr = Array(nums.length).fill(1);
    
    for (let i = 0; i < nums.length; ++i) {
        preArr[i] = preProd;
        preProd *= nums[i];
    }
    
    for (let i = nums.length - 1; i >= 0; --i) {
        postArr[i] = postProd;
        postProd *= nums[i];
    }
    
    for (let i = 0; i < nums.length; ++i) {
        answer[i] = preArr[i]*postArr[i];
    }

    return answer;
};

/*
 * Constant Space
 */
function productExceptSelf(nums: number[]): number[] {
    const answer = Array(nums.length).fill(1);
    let preProd = 1;
    let postProd = 1;
    
    for (let i = 0; i < nums.length; ++i) {
        answer[i] = preProd;
        preProd *= nums[i];
    }
    
    for (let i = nums.length - 1; i >= 0; --i) {
        answer[i] *= postProd;
        postProd *= nums[i];
    }

    return answer;
};

/* 
 * Time & Space Complexities
 */
// n = length of nums

// Brute:
// Time: O(n)
// Space: O(n)

// Constant Space
// Time: O(n)
// Space: O(1)
