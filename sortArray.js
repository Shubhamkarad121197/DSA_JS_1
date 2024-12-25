// Problem Description
// Given an array of n strings. Sort the array in lexicographical order.

// Input format
// First line contains integer n.

// Next line contains n space separated strings.

// Output format
// Print the sorted array.

// Sample Input 1
// 4

// abc abd ab a

// Sample Output 1
// a ab abc abd

// Explanation
// The given array is sorted in lexicographical order.

// Constraints
// 1 <= n <= 10000

// Strings contain only lowercase english alphabet.

// Each string will have length no more than 15.


let str="abc abd ab a";
//1st Way of Solve this code
// function sortString(str){
//   let splittedString=str.split(' ');
//   return  splittedString.sort().join(' ');

// }
//2nd way of solving code
function mySplit(str) {
    let result = []; 
    let word = ""; 

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            result.push(word); 
            word = ""; 
        } else {
            word += str[i]; 
        }
    }
    result.push(word);
    return result;
}

function sortString(str){
    let splittedString=mySplit(str);
    console.log(splittedString)
    let res=''
    for(let i=splittedString.length-1;i>=0;i--){
        res+=splittedString[i]+" ";
    }
    return res;
}
let sortedString=sortString(str);
console.log(sortedString);