
function isPrime(number) {
    number = Number(number)
    if (number < 2)
        return false;

    for (let i = 2; i < number; i++)
        if (number % i === 0)
            return false

    return true;
}

function findPrimes(min, max) {
    min = Number(min)
    max = Number(max)
    let c = 0;
    for (let i = min; i < max; i++)
        if (isPrime(i))
            c++;

    return c;
}

function sum(...params) {
    return params.reduce((p, n) => p + Number(n), 0)
}

function average(...params) {
    return sum(...params)/params.length
}



// console.log('command',command);
// console.log('args',args);


const commands = {
    sum,
    average,
    isPrime,
    findPrimes,
    help: () => `
sum 1 2 3 4
avg 1 2 3 4
is-prime 20
find-primes 2 100
help`
}


let [, , commandName, ...args] = process.argv;
let command=commands[commandName]

if(command){
    let result = command(...args)
    console.log(result)
} else{
    console.log(`Invalid command: ${commandName}`)
}