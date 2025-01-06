// Given the array of integers nums of size n, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

// Input format
// First line contains n, the number of distinct integers.

// Second line contains n space separated integers

// Output format
// Print the maximum product.

// Sample Input 1
// 4

// 3 4 5 2

// Sample Output 1
// 12

// Explanation
// If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)(nums[2]-1) = (4-1)(5-1) = 3*4 = 12.

// Sample Input 2
// 4

// 1 5 4 5

// Sample Output 2
// 16

// Explanation
// Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.

// Constraints
// 2 <= n <= 500

// 1 <= nums[i] <= 10^3

let arr=[3,4,5,2];
function sortArr(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[i]>arr[j]){
                [arr[i],arr[j]]=[arr[j],arr[i]]
            
            }
           
        }
    }
    return arr;
}


function MaxProduct(arr){

    let sortedArr=sortArr(arr);
    let maxNumber=arr[arr.length-1];
    let secondMaxNumber=arr[arr.length-2];
    

    return maxNumber* secondMaxNumber;


}

console.log(MaxProduct(arr))