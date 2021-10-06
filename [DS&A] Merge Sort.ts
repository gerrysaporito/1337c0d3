const MergeSort = (nums: number[]) => {
  const merge = (nums1: number[], nums2: number[]) => {
    const res = [];
    
    while (nums1.length > 0 && nums2.length > 0) {
      if (nums1[0] < nums2[0]) res.push(nums1.shift());
      else res.push(nums2.shift());
    }
    
    return [...res, ...nums1, ...nums2];
  }
  
  if (nums.length === 1) return nums;
  const mid = Math.round(nums.length/2);
  return merge(MergeSort(nums.slice(0, mid), MergeSort(nums.slice(mid));
}

/* 
 * Time & Space Complexities
 */
// n = length of nums

// Merge Sort:
// Time: O(nlogn)
// Space: O(n)
