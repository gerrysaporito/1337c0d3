/*
 * Bucket Sort
 */
function topKFrequent(nums: number[], k: number): number[] {
    const map: { [key: string]: number } = {};
    const res = [];
    
    for(let num of nums) {
        if (map[num]) map[num]++;
        else map[num] = 1;
    }
    
    const heap = new Array(nums.length)
        .fill(null)
        .map(() => new Array());
    
    for (let key of Object.keys(map)) {
        const value = map[key];
        heap[value-1].push(key);
    }
    
    for (let i = heap.length-1; i >= 0; --i) {
        if (heap[i].length > 0 && res.length <= k) res.push(...heap[i])
    }
    
    return res.splice(0, k);
};

/* 
 * Time & Space Complexities
 */
// n = length of nums

// Brute:
// Time: O(n^2)
// Space: O(n)

// Max Heap
// Time: O(klogn)
// Space: O(n)

// Bucket Sort
// Time: O(n)
// Space: O(n)
