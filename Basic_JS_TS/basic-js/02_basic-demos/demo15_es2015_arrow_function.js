
//normal function syntax
function plus(a,b){
    return a+b;
}

//function object syntax
const minus= function(a,b){
    return a-b;
}

//arrow function syntax (ES2015) (Also commonly known as Lambda Function)
//we removed function keyword and add fat arrow '=>'
const multiply  = (a,b)=>{
    return a*b;
    
}

//simplified arrow function syntax. Commonly known as Lambda Expression
//works if you have a single line of logic inside the function
//return keyword and curly braces are optional
const divide = (a,b) => a/b;   //the output of the expression is implicitly returned.



//WHAT IS THE ADVANTAGE OF FUNCTION AS AN OBJECT?

let a=50, b= 15;
//I can create an array of functions
let operations=[plus, minus, multiply, divide];

for(let operation of operations){

    console.log(operation.name,'(',a,',',b,') = ', operation(a,b));

}