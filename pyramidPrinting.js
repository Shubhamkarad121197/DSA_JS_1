// Implement the function patternPrintingI() that

// Accepts a number n as an argument

// Returns an array of strings representing a triangle-shaped pattern with n rows using * where the starting row will have one * and will increment by one for each row after it.


// Example: if n = 4 pattern will be:

// image


// Note
// Make sure there is a space

// Input format
// First line contains an integer n - Number of rows.


// Output format
// Return an array of strings with each element in the array representing a row of the pattern.


// Sample Input 1
// 4
//output:
//*
//** 
//***
//**** 
let n=4;
function patternPrintingI(n) {
    const patternArray = []; 

  for (let i = 1; i <= n; i++) {
      let row = ''; 
      for (let j = 0; j < i; j++) {
          row += '*'+' ';
      }
      patternArray.push(row); 
  }

  return patternArray; 
}

function main() {
    let n = parseInt(4);
    let arr = patternPrintingI(n);
    arr.forEach( line => console.log(line))
}
main()