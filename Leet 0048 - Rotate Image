/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const transpose = (matrix: number[][]) => {
        const length = matrix.length;
        for (let i = 0; i < length; ++i) {
            for (let j = i; j < length; ++j) {
                const temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
    };

    const reflect = (matrix: number[][]) => {
        const length = matrix.length;
        for (let i = 0; i < length; ++i) {
            for (let j = 0; j < Math.round(length/2); ++j) {
                let temp = matrix[i][j];
                matrix[i][j] = matrix[i][length-1-j];
                matrix[i][length-1-j] = temp;
            }
        }
    };

    transpose(matrix);
    reflect(matrix);
};

/* 
 * Time & Space Complexities
 */
// n = number of rows
// m = number of columns

// Brute:
// Time: O(n*m)
// Space: O(1)
