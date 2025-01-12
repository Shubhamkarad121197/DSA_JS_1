// Given a number n, you have to find the count of the numbers from 1 to n that are coprime to n.

// Input format
// First line contains an integer n - the given number.

// Output format
// Print the total count of coprime numbers.

// Sample Input 1
// 9

// Sample Output 1
// 6

// Explanation
// Numbers coprime to 9 are: 1, 2, 4, 5, 7, 8

function findGcd(a,b){
    if(b==0){
        return a;
    }
    
    return findGcd(b,a%b);
}
let result=0;
let count=0;
function findCoprimes(n){
    
    for(let i=0;i<n;i++){
        result=findGcd(i,n);
        if(result==1){
        count++;
    }
    }
    return count;
    
}

console.log(findCoprimes(9))