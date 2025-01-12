// Problem Description
// You are given a positive integer 'N'. You have to find the sum of the first 'N' natural numbers.

// Input format
// First line contains an integer - N.

// Output format
// Print the sum of first N natural numbers.

// Sample Input 1
// 10

// Sample Output 1
// 55

// Explanation
// 1+2+3+4+5+6+7+8+9+10 = 55

// Constraints
// 1 <= N <= 10^4

function findNaturalSum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}
let addNaturalNum=findNaturalSum(10);
console.log(addNaturalNum);

//Natural Sum Using Recursion
function findNaturalSumUsingRecursion(n){
    if(n==1||n==0){
        return 1;
    }
    return n+findNaturalSumUsingRecursion(n-1);
}

let addNaturalNumUsingRecursion=findNaturalSumUsingRecursion(15);
console.log(addNaturalNumUsingRecursion)
