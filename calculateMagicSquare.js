// Problem Description
// Given a matrix of dimension nxn having elements 1 to nxn distinct elements. Check whether the matrix is magic square or not.

// Magic square is a square that has the same sum of rows, columns and diagonals.

// Input format
// First line contains integer n.

// In next n lines each line contains n elements.

// Output format
// Print "Yes" if it is a magic square , "No" otherwise.

// Sample Input 1
// 3

// 4 9 2

// 3 5 7

// 8 1 6

// Sample Output 1
// Yes

// Explanation
// All rows, columns and diagonals have sum 15.

// Constraints
// 1 <= n <= 100

// 1 <= element of matrix <= n*n

// Resource




function checkMagicSquare(n, mat) {
    // Step 1: Calculate the sum of the first row
    let sum = 0;
    for (let j = 0; j < n; j++) {
        sum += mat[0][j];
    }

    // Step 2: Check sums of all rows
    for (let i = 0; i < n; i++) {
        let rowSum = 0;
        for (let j = 0; j < n; j++) {
            rowSum += mat[i][j];
        }
        if (sum !== rowSum) {
            return false;
        }
    }

    // Step 3: Check sums of all columns
    for (let j = 0; j < n; j++) {
        let colSum = 0;
        for (let i = 0; i < n; i++) {
            colSum += mat[i][j];
        }
        if (sum !== colSum) {
            return false;
        }
    }

    // Step 4: Calculate the primary diagonal sum
    let diagonalSum = 0;
    for (let i = 0; i < n; i++) {
        diagonalSum += mat[i][i];
    }
    if (sum !== diagonalSum) {
        return false;
    }

    // Step 5: Calculate the secondary diagonal sum
    let secDiagonalSum = 0;
    for (let i = 0; i < n; i++) {
        secDiagonalSum += mat[i][n - i - 1];
    }
    if (sum !== secDiagonalSum) {
        return false;
    }

    return true;
}

// Main function
function main() {
    let n = 3; // Size of the matrix (adjust as needed)
    let matrix = [
        [2, 7, 6],
        [9, 5, 1],
        [4, 3, 8]
    ]; // Example of a magic square matrix

    let result = checkMagicSquare(n, matrix);
    if (result) {
        console.log("Yes, it's a magic square.");
    } else {
        console.log("No, it's not a magic square.");
    }
}

// Call the main function
main();
