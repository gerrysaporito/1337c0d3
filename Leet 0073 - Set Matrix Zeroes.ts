/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][] | string[][]): void {    
    const marker = 'set';
    
    for (let r = 0; r < matrix.length; ++r) {
        for (let c = 0; c < matrix[r].length; ++c) {
            if (matrix[r][c] === 0) {
                for (let i = 0; i < matrix.length; ++i) {
                    if (matrix[i][c] !== 0) matrix[i][c] = marker;
                }
                for (let i = 0; i < matrix[r].length; ++i) {
                    if (matrix[r][i] !== 0) matrix[r][i] = marker;
                }
            }
        }
    }

    for (let r = 0; r < matrix.length; ++r) {
        for (let c = 0; c < matrix[r].length; ++c) {
            if (matrix[r][c] === marker) matrix[r][c] = 0
        }
    }
};

/* 
 * Time & Space Complexities
 */
// n = number rows/columns

// Brute Force:
// Time: O(n^3)
// Space: O(1)
