function sum(...numbers){
    let total=0;
    for(let num of numbers)
        total+=num;
    return total;
}


function average(...numbers){ //rest parameter to accept multiple numbers
    
    let total=sum(...numbers); //spread operator to expand array to multiple parameters
    return total/numbers.length;
}

let r1=sum(1,2,3,4);

console.log('r1',r1);


let a1= average(10,20,30,40,50);

console.log('a1',a1);