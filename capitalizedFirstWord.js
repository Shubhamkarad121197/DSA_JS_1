// Given a paragraph of words, capitalize the first character of each word and return the paragraph.

// Input format
// First line contains a string - The paragraph.

// Output format
// Print the paragraph after capitalizing each word.

// Sample Input 1
// the quick Brown fox jumps over The lazy dog.

// Sample Output 1
// The Quick Brown Fox Jumps Over The Lazy Dog.

// Explanation
// Each word has it’s first character capitalized

// Constraints
// Length of paragraph < 100.

// The paragraph contains spaces, lowercase and uppercase characters.

// Resource
// Convert First character of each word to uppercase


let Str="the quick Brown fox jumps over The lazy dog.";


function mySplit(str){
    let arr=[];
    let word='';
    for(let i=0;i<str.length;i++){
        if(str[i]==' '){
            arr.push(word)
            word='';
        }
        else{
            word+=str[i];
        }
       
    }
   
    arr.push(word);
    
    return arr;
}


function capitalizedWord(Str){
    let chars=mySplit(Str);
    let updatedString="";
    for(let char of chars){
        updatedString+=char[0].toUpperCase() + char.slice(1)+" "
    }

    return updatedString;
}

let  ans=capitalizedWord(Str);
console.log(ans);