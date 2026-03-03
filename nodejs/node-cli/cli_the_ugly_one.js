
function isPrime(number){
    number=Number(number)
    if(number<2)
        return false;

    for(let i=2;i<number;i++)
        if(number%i===0)
            return false

    return true;
}

function findPrimes(min,max){
    min=Number(min)
    max=Number(max)
    let c=0;
    for(let i=min;i<max;i++)
        if(isPrime(i))
            c++;

    return c;
}

function sum(...params){
    let result= params.reduce((p,n)=>p+Number(n),0)
    console.log(result)
}

function average(...params){
    let result = params.reduce((p,n)=>p+Number(n),0)/params.length;
    console.log(result)
}

let [,,command,...args]=process.argv;

// console.log('command',command);
// console.log('args',args);

if(command==='sum')
    sum(...args)
else if (command==='avg')
    average(...args)
else if(command==='is-prime')
    isPrime(...args)
else if(command==='find-primes')
    findPrimes(...args)
else if(command==='help')
    console.log(`
sum 1 2 3 4
avg 1 2 3 4
is-prime 20
find-primes 2 100
help`)