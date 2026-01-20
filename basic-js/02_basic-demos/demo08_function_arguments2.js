

function avg(){
    //ever JS function has a secret variable called arguments which is array like object (not a real array)
    //it stores all the arguments passed to function
    //including those
    //passed formally and additionally
    let sum=0;
    for(let i=0;i<arguments.length;i++)
        sum+=arguments[i];

    return sum/arguments.length;
   
}

console.log('avg(10,20)',avg(10,20));
console.log('avg(10,20,30,40)',avg(10,20,30));
console.log('avg(10)',avg(10));
console.log('avg()',avg());