

function plus(a,b){
    return a+b;
}
console.log('plus(2,3)',plus(2,3));


//A funciton is also a data type in JS
console.log('typeof plus',typeof plus);

//a function is like an object and it has its properties
console.log('plus.name',plus.name);


//since it is a type like number, wecan assign it to another variable
let add=plus;

//add acts like a plus function.
console.log('add(5,7)',add(5,7));

//it is not a new function, it is just another reference to the same function
console.log('add.name',add.name);


//we can combine function definition and assignment

let minus = function substract(a,b){
    return a-b;
}

console.log('minus(9,3)',minus(9,3));
console.log('minus.name',minus.name);

//can't access function by its name 'substract' here
//because no reference called 'substract' exists in this scope
//console.log('substract(8,1)',substract(8,1));

//since it doesn't exist, we may chose not to name it at all
//this is called anonymous function.
let multiply = function (a,b){
    return a*b;
}

console.log('multiply(11,4)',multiply(11,4));
//this function is automatically assigned the  name from the first reference it is attached to
console.log('multiply.name',multiply.name);





