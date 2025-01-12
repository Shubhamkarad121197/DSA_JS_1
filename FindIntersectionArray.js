
// Given two arrays A and B, write a function to compute their intersection.

// Note:

// Each element in the result should appear as many times as it shows in both arrays.

// The result needs to be in sorted order.

// Input format
// First line contains one integer N denoting the number of elements in array A

// Next line contains N integers denoting the elements of array A

// Next line contains one integer M denoting the number of elements in array B

// Next line contains M integers denoting the elements of array B

// Output format
// Single line containing the intersection elements of the two arrays in sorted order.

// Sample Input 1
// 4

// 1 2 2 1

// 2

// 2 2

// Sample Output 1
// 2 2
let num1=[1,2,2,4,3,10];
let num2=[2,2,3,6,7,9,10];
let newMap=new Map();

for(let num of num1){
        if(newMap.has(num)){
    
        newMap.set(num,newMap.get(num)+1)
        }
        else{
         newMap.set(num,1)}
    
}

let result=[]

for(let num of  num2){
    if(newMap.has(num)){
        result.push(num);
        //  newMap.set(num, newMap.get(num) - 1); 
    }
}

console.log(result)