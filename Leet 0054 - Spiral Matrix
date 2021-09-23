function spiralOrder(matrix: number[][]): number[] {
    const res = [];
    let left = 0;
    let right = matrix[0].length;
    let top = 0;
    let bottom = matrix.length;

    while (left < right && top < bottom) {
        // Iterate over top row
        for (let i = left; i < right; ++i) {
            res.push(matrix[top][i]);
        }
        top++;
        
        // Iterate over right column
        for (let i = top; i < bottom; ++i) {
            res.push(matrix[i][right-1]);
        }
        right--;
                
        if (!(left < right && top < bottom)) {
            return res
        }

        // Iterate over bottom row
        for (let i = right-1; i > left-1; --i) {
            res.push(matrix[bottom-1][i]);
        }
        bottom--;

        // Iterate over left column
        for (let i = bottom-1; i > top-1; --i) {
            res.push(matrix[i][left]);
        }
        left++;
    }

  return res;
};

/* 
 * Time & Space Complexities
 */
// n = number of rows
// m = number of columns

// Brute:
// Time: O(m*n)
// Space: O(1)
