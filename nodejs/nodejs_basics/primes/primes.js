import EventEmitter from 'events'

export function isPrimeSync(number){
    if(number<2)
        return false;
    for(let i=2;i<number;i++)
        if(number%i===0)
            return false

    return true
}

class RangeError extends Error{
    constructor(min,max){
        super(`Invalid Range ${min}-${max}`)
        this.range={min,max}
    }
}


export function findPrimes(min,max){

    const event = new EventEmitter();
    setTimeout(()=>{
        if(min>=max)
            return event.emit('error',new RangeError(min,max))
    
        let c=0;
        for(let i=min;i<max;i++)
            if(isPrimeSync(i)){
                c++;
                event.emit('prime-found', i)
            }

        event.emit('done',c)

    },10)

    return event;

}