// Given a sorted array of N distinct integers and a target value X, return the index if the target is found. If not found then return -1.

// Note - Try implementing with O(logN) runtime complexity.

// Input format
// First line contains integers N, the number of distinct integers, and X, the target value. Second line contains N space separated integers.

// Output format
// Print the index of the target element if found else return -1.

// Sample Input 1
// 5 7 1 3 5 7 13

// Sample Output 1
// 3

// Explanation
// Target integer 7 is at index 3.

// Sample Input 2
// 5 8 1 3 5 7 13

// Sample Output 2
// -1

// Explanation
// Target integer 8 is not present.





function searchingTarget(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) { 
        if (arr[left] === target) {
            return left; 
        }
        if (arr[right] === target) {
            return right; 
        }
        left++; 
        right--; 
    }

    return -1; 
}

// Example usage
let arr = [4, 2, 7, 1, 3, 8];
let target = 3;
console.log(searchingTarget(arr, target)); // Output: 4
