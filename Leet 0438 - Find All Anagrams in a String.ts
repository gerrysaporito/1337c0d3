/*
 * Sliding Window
 */
function findAnagrams(s: string, p: string): number[] {
    const getCountId = (str: string) => {
        const strCount = new Array(26).fill(0);
        for (const char of str.split('')) {
            strCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
        }
        return strCount.join(',');
    }
    
    const res = [];
    const pId = getCountId(p);
    
    for (let left = 0; left <= s.length-p.length; ++left) {
        const subStr = s.slice(left, left + p.length);
        const subId = getCountId(subStr);

        if (pId === subId ) res.push(left);
    }
        return res
};

/* 
 * Time & Space Complexities
 */
// n = length of s
// m = length of p

// Brute:
// Time: O(n^2)
// Space: O(1)

// Sliding Window:
// Time: O(n + m)
// Space: O(1)
