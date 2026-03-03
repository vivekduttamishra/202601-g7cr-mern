import Cli from './cli.js'

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
    return  params.reduce((p,n)=>p+Number(n),0)
    
}

function average(...params){
    return sum(...params)/params.length;
    
}

average.help=`
    Finds Average of all Values
    Usage:
    average 1 2 3 4

`

isPrime.help=`
    Finds if a given number is prime or not
    Usage
    is-prime 29
`

findPrimes.help=`
    Finds all primes in a given range.
    Usage:
    find-primes 2 100
`

const cli=new Cli()

cli.addCommand(sum, null, 'sums multiple numbers:  sum 1 2 3 4')
cli.addCommand(average)
cli.addCommand(isPrime, 'is-prime')
cli.addCommand(findPrimes, 'find-primes')

cli.exectue();