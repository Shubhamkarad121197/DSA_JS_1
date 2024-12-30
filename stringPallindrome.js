// Given a string comprising only lowercase alphabets, determine whether it qualifies as a palindrome.

// A string is considered a palindrome if it reads the same forwards and backwards.

// Note:

// For the purpose of this problem, we define empty string as valid palindrome.

// Input format
// The only line contains a string.

// Output format
// True or False.

// Sample Input 1
// madam

// Sample Output 1
// true

// Explanation
// "madam" spelt backwards is "madam", therefore, it is a palindrome.

// Sample Input 2
// crio

// Sample Output 2
// false

// Explanation
// "crio" spelt backwards is "oirc", therefore, it is not a palindrome.

let stringPallindrome= function(str){
    let revString=""
    for(let i=str.length-1;i>=0;i--){
        revString+=str[i];

    }
    if(revString==str){
        return true;
    }
    else{
        return false;
    }
    
}

console.log(stringPallindrome("MAAM"));
console.log(stringPallindrome("VAIDEHI"));