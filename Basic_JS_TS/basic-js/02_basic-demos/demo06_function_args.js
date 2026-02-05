

function avg(a,b){
    return (a+b)/2;
}

console.log('avg(2,3)',avg(2,3));
console.log('avg(10,20)',avg(10,20));


//we can pass more arguments than expected number of parameters
//in most other language this will throw an error 
//first two arguments will be assigned to a and b
//rest is ignored in explicit parameter list.
console.log('avg(2,3,100,200,300)',avg(2,3,100,200,300));


//we may pass lesser arguments than expected number of parameters
console.log('avg(2)',avg(2)); //same as   avg(2,undefined)  -> 2+undefined = NaN /2 = NaN
