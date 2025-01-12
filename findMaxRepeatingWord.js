// Write a program that takes a list of words arr[] as input and returns the most occurring word in arr[].

// It is guaranteed that if there are multiple words with the same frequency, the program should return the lexicographically minimum string among them.

// Input format
// The first line contains an integer N, the number of words in the array.

// The next N lines contain the words in the array.

// Output format
// Return the most occurring word in the array.

// Sample Input 1
// 4

// hello

// world

// crio

// crio

// Sample Output 1
// crio

let wordList=["Hello","World","Crio","Crio"]
let wordMap=new Map();
for(let word of wordList){
    if(wordMap.has(word)){
        wordMap.set(word,wordMap.get(word)+1)
    }
    else{
         wordMap.set(word,1)
    }
}
let maxCount=0;
let MaxOccuringWord=''
for(let [word,count] of wordMap.entries()){
    
    if(count>maxCount){
        MaxOccuringWord=word;
    }
    
}
console.log(MaxOccuringWord);