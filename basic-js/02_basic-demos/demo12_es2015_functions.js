
//ES2015 variable (rest) parameters
//we can now officially pass multiple parameters
//rest parameter may look like arguments but it takes 'rest' values not all values
//it doesn't include 'message'  but what comes after other formal parameters.
function greetMany(message, ...names){

    console.log('names',names);    //array of rest parameters
    console.log('arguments',arguments); //array like object of all parameters
    
    

    for(let name of names)
        console.log(message,name)
}


greetMany('Hello', 'Vivek', 'Alice', 'Bob');
greetMany('Welcome', 'Sanjay');

