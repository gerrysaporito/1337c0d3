/*
 * Sorting
 */
function insert(intervals: number[][], newInterval: number[]): number[][] {
    const insertNewInterval = (intervals: number[][], newInterval: number[]) => {
        const length = intervals.length;
        const newIntervals = [newInterval];
        const res = [];

        while (intervals.length && newIntervals.length) {
            const interval = intervals[0];

            if (newInterval[0] < interval[0]) res.push(newIntervals.shift());
            else res.push(intervals.shift());
        }

        return [...res, ...intervals, ...newIntervals];
    }
    
    const mergeOverlappingIntervals = (intervals: number[][]) => {
        let i = 1;

        while (i < intervals.length) {
            if (intervals[i-1][1] >= intervals[i][0]) {
                intervals[i-1][1] = Math.max(intervals[i-1][1], intervals[i][1]);
                intervals.splice(i, 1);
            } else {
                i++;
            }
        }
        
        return intervals
    }
    
    return mergeOverlappingIntervals(insertNewInterval(intervals, newInterval));
};

/* 
 * Time & Space Complexities
 */
// n = length of intervals

// Sorting:
// Time: O(nlogn)
// Space: O(n)
