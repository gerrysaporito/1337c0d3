/*
 * Sorted
 */
function canAttendMeetings(intervals: number[][]): boolean {
    const mergeSort = (intervals: number[][]): number[][] => {
        const merge = (intervals1: number[][], intervals2: number[][]): number[][] => {
            const res = [];
            
            while (intervals1.length && intervals2.length) {
                if (intervals1[0][0] < intervals2[0][0]) res.push(intervals1.shift());
                else res.push(intervals2.shift());
            }
            
            return [...res, ...intervals1, ...intervals2];
        }
        
        if (intervals.length <= 1) return intervals;
        const mid = Math.round(intervals.length/2);
        return merge(mergeSort(intervals.slice(0,mid)),mergeSort(intervals.slice(mid)))
    }
    
    const sortedIntervals = mergeSort(intervals)
    
    const mergeIntervals = (intervals: number[][]): number[][] => {
        let i = 1;
        
        while (i < intervals.length) {
            if (intervals[i-1][1] > intervals[i][0]) {
                intervals[i-1][1] = Math.max(intervals[i-1][1], intervals[i][1]);
                intervals.splice(i,1);
            } else {
                i++;
            }
        }
        return intervals
    }
        
    return !!!(intervals.length - mergeIntervals(mergeSort(intervals)).length);
};

/*
 * Brute
 */
function canAttendMeetings(intervals: number[][]): boolean {
    const sortedIntervals = intervals.sort((a,b) => a[0]-b[0])
    
    for (let i = 1; i < sortedIntervals.length; ++i) {
        let i1 = sortedIntervals[i-1];
        let i2 = sortedIntervals[i];
        
        if (i2[0] < i1[1]) return false
    }
    
    return true;
};

/* 
 * Time & Space Complexities
 */
// n = length of intervals

// Sorted:
// Time: O(nlogn)
// Space: O(n)

// Brute:
// Time: O(n^2)
// Space: O(1)
