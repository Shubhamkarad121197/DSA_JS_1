// Count the number of prime numbers less than a non-negative number, n.

// Input format
// Single line containing one integer N

// Output format
// Single line containing one number denoting the number of prime numbers less than N

// Sample Input 1
// 10

// Sample Output 1
// 4

// Explanation
// There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

function findPrime(n){
    for(let i=2;i<n;i++){
        if(n%i==0){
            return  false;
        }
    }
    return true;
}
let result=[]
for(let i=2;i<50;i++){
    if(findPrime(i)){
        result.push(i)
    }
}
console.log(result)