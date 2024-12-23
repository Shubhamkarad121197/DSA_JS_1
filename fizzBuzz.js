// Write a program that outputs the string representation of numbers from 1 to N.

// But for multiples of three it should output "Fizz" instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

// Input format
// First line contains an integer representing the value of N.

// Output format
// Return an array of strings where each string is either Fizz (for multiples of 3 and NOT 5) or Buzz (for multiples of 5 and NOT 3) or FizzBuzz (for multiples of BOTH 3 and 5) or an integer (For multiples of NEITHER 3 NOR 5).

// Sample Input 1
// 15

// Sample Output 1
// 1

// 2

// Fizz

// 4

// Buzz

// Fizz

// 7

// 8

// Fizz

// Buzz

// 11

// Fizz

// 13

// 14

// FizzBuzz

// Explanation 1
// For n = 1 , 1 is printed.

// For n = 3 , Fizz is printed.

// For n = 5 , Buzz is printed.

// For n = 15 , FizzBuzz is printed.

// Constraints
// 1 <= N <= 100000

let n=15;
function fizBuzzFn(n){
    let result=[];
    for(let i=1;i<=n;i++){
        if(i%5==0 && i%3==0){
            result.push("FizzBuzz")
        }
        else if(i%3==0){
            result.push("Fizz");
        }
        else if(i%5==0){
            result.push("Buzz");
        }
        else{
            result.push(i);
        }
    }
    return result;

}
let val=fizBuzzFn(n);
console.log(val);