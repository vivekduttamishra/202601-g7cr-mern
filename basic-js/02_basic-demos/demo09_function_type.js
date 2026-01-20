

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

console.log('substract(8,1)',substract(8,1));






