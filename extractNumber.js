// Given an array containing a mix of strings and numbers, such as [a, 1, b, 2, c, d, 3, 4, e], your task is to create a new array that retains only the numbers present in the original array.

// For example, from the provided array, the output array should contain [1, 2, 3, 4]. The numbers in the original array can be single or multiple digits, and there may be strings interspersed among them.

// Note: The numbers in the array are also of string type.

// Input format
// First line contains an integer N, the number of elements in the input array

// Second line contains the elements of the input array

// Output format
// Return the expected integer array. The order of integers in the input array must be maintained.

// Sample Input 1
// 8

// a 3 long 17 crio dsa 100 20

// Sample Output 1
// 3 17 100 20

// Explanation
// The input array contains four integers [3, 17, 100, 20]


let arr=["a",3,"long",17,"crio","dsa",100,20];
function extractNumber(arr){
    let numberOnly=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            numberOnly.push(arr[i])
        }
    }
    return numberOnly;

}
let ans=extractNumber(arr);
console.log(ans);