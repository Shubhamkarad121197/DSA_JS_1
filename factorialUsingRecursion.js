// 

function factorialUsingRecursion(num){
    if(num==0){
        return 1;
    }
    return num*factorialUsingRecursion(num-1);
}
let answer=factorialUsingRecursion(5);
console.log(answer);