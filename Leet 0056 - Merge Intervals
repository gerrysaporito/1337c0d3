/*
 * Sorting
 */
function merge(intervals: number[][]): number[][] {
    const mergeSort = (intervals: number[][]) => {
        const merge = (intervals1: number[][], intervals2: number[][]) => {
            const res = [];
            
            while (intervals1.length && intervals2.length) {
                if (intervals1[0][0] < intervals2[0][0]) res.push(intervals1.shift());
                else res.push(intervals2.shift());
            }
            
            return [...res, ...intervals1, ...intervals2];
        }
        
        if (intervals.length === 1) return intervals;
        const mid = Math.round(intervals.length/2);
        return merge(mergeSort(intervals.slice(0,mid)), mergeSort(intervals.slice(mid)));
    }
    
    let i = 1;
    intervals = mergeSort(intervals);
    while (i < intervals.length) {
        if (intervals[i-1][1] >= intervals[i][0]) {
            intervals[i-1][1] = Math.max(intervals[i-1][1], intervals[i][1]);
            intervals.splice(i,1);
        } else {
            i++
        }
    }
    
    return intervals
};

/* 
 * Time & Space Complexities
 */
// n = length of intervals

// Sorting:
// Time: O(nlogn)
// Space: O(n)
