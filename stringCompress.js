// Problem Description
// You are given a string S and you have to implement a function to perform basic string compression, using the counts of repeated characters.

// If the "compressed" string would not become smaller than the original string, your function should return the original string.

// You can assume the string has only uppercase and lowercase letters (a - z).


// Input format
// A single line that contains the string S.


// Output format
// A single line that represents the compressed string as specified in the problem.


// Sample Input 1
// aabccccc


// Sample Output 1
// a2b1c5


// Explanation 1
// First 'a' repeats two times, then 'b' repeats once, then 'c' repeats two times.


// Constraints
// 1 <= length(S) <= 100000

// Crio Methodology - Problem Approach
// Brainstorm some approaches for solving the problem before viewing the video


let str= "aabccccc"
function compressString(str){
    let count=1;
    let char=str[0];
    let result='';
    for(let i=0;i<str.length;i++){
        
        if(char==str[i]){
            count++
        }
        else{
            result+=char;
            result+=count;
            char=str[i];
            count=1
        }
        
    }
    result+=char;
    result+=count;
    if(result.length>=str.length){
        return str;
    }
    return result;
}
console.log(compressString(str))