import {delay} from './delay.cjs'

export const isPrimeSync = number=>{
    if(number<2)
        return false;
    for(let i = 2; i<number;i++)
        if(number%i===0)
            return false;

    return true;
}


export const findPrimes = async (min,max)=>{
    let primes=[]
    for(let i=min;i<max;i++){
        await delay(1)
        if(isPrimeSync(i))
            primes.push(i)
    }

    return primes
}

