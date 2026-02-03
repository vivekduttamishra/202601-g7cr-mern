

export function isPrime(number){

    if(number<2)
        return false;

    for(let n=2;n<number;n++)
        if(number%n===0)
            return false

    return true
}


export function findPrimes(min,max){
    if(isNaN(min))
        throw new Error(`Invalid min: ${min}`)
    if(isNaN(max))
        throw new Error(`Invalid min: ${max}`)
    if(min>=max)
        throw new Error(`Invalid range: ${min}-${max}`)

    let primes=[]
    for(let i=min;i<max;i++)
        if(isPrime(i))
            primes.push(i)

    return primes;
}