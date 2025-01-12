// You are given a string which comprises lower case alphabets (a-z), upper case alphabets (A-Z), numbers, (0-9) and special characters like !,-.; etc.

// You are supposed to find out which character occurs the maximum number of times and the number of its occurrence, in the given string. If two characters occur equal number of times, you have to output the character with the lower ASCII value.

// For example, if your string was: aaaaAAAA, your output would be: A 4, because A has lower ASCII value than a.

// Input format
// Input will contain 1 line containing a string S.

// Output format
// You've to output two things which will be separated by a space: a) The character which occurs the maximum number of times. b) The number of its occurrence.

// Sample Input 1
// Statements are unique.

// Sample Output 1
// e 4

// Explanation
// e occurs 4 times.

let string="Statements are unique.";

let newMap=new Map();

for(let i=0;i<string.length;i++){
    if(newMap.has(string[i])){
        newMap.set(string[i],newMap.get(string[i])+1)
    }
    else{
        newMap.set(string[i],1)
    }
}

let maxCount=0;
let maxChar='';
for(let [char,count] of newMap.entries()){
    if(count>maxCount){
        maxCount=count;
        maxChar=char;
    }
}   
console.log(maxChar,maxCount)