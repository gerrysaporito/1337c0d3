/*
 * Merge Sort
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const mergeSort = (nums: number[]) => {
        const merge = (left: number[], right: number[]): number[] => {
            const sorted = [];
            
            while (left.length > 0 && right.length > 0) {
                if (left[0] > right[0]) {
                    sorted.push(right.shift());
                } else {
                    sorted.push(left.shift());
                }
            }
            
            return [...sorted, ...left, ...right];
        }
        
        if (nums.length <= 1) return nums;

        const mid = nums.length/2;
        const left = nums.slice(0, mid);
        const right = nums.slice(mid);
        
        return merge(mergeSort(left), mergeSort(right));
    }
    
    const nums = mergeSort([...nums1, ...nums2]);
    
    let med = 0;
    if (nums.length % 2 === 1) {
        const mid = Math.floor(nums.length/2);
        med = nums[mid]
    } else {
        const mid = nums.length/2 - 1;
        med = (nums[mid] + nums[mid+1]) /2
    }
    
    return med;
};

/* 
 * Time & Space Complexities
 */
// n = length of nums1
// m = length of nums2

// Brute Sort:
// Time: O((n+m)^2)
// Space: O(1)

// Merge Sort:
// Time: O(log(n+m))
// Space: O(n+m)
