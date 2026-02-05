
function operatorSelector(operator){
    let plus= function(a,b){return a+b}
    let minus= (a,b)=>a-b;
    if(operator==='+')
        return plus;
    else if(operator==='-')
        return minus;
}

//how to use
let p1 = operatorSelector('+'); //it returns plus function

let m1 = operatorSelector('-'); //returns minus function

let p2= operatorSelector('+'); //returns a different plus function

console.log('p1===m1',   p1===m1); //false

console.log('p1.name===p2.name',p1.name===p2.name); //true. plus

console.log('p1===p2',p1===p2); //false








