function minMeetingRooms(intervals: number[][]): number {
    const startTimes = intervals.map(int => int[0]).sort((a,b) => a-b);
    const endTimes = intervals.map(int => int[1]).sort((a,b) => a-b);
    let count = 0;
    let max = 0;
    let start = 0;
    let end = 0;
    
    while (start < intervals.length) {
        if (startTimes[start] < endTimes[end]) {
            start++;
            count++;
        } else {
            end++;
            count--;
        }
        
        max = Math.max(max, count);
    }
    
    return max;
};

/* 
 * Time & Space Complexities
 */
// n = length of intervals

// Brute:
// Time: O(n^2)
// Space: O(n)

// Sorted:
// Time: O(nlogn)
// Space: O(n)
