let plus= function(a,b){return a+b}

let minus= (a,b)=>a-b;

function operatorSelector(operator){
    if(operator==='+')
        return plus;
    else if(operator==='-')
        return minus;
}

//how to use
let x = operatorSelector('+'); //it returns plus function
console.log('x(2,3)',x(2,3)); //5

let r2= operatorSelector('-')(8,1); //chained two function
console.log('r2',r2);






