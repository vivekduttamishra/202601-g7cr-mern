

function avg(a,b){
    //ever JS function has a secret variable called arguments which is array like object (not a real array)
    //it stores all the arguments passed to function
    //including those
    //passed formally and additionally
    console.log('a',a,'b',b, 'arguments', arguments);
    

    return (a+b)/2;
}

console.log('avg(10,20)',avg(10,20));
console.log('avg(10,20,30)',avg(10,20,30));
console.log('avg(10)',avg(10));
console.log('avg()',avg());