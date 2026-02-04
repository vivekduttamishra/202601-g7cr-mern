


export function isPrime(number:number) {
    if (number < 2)
        return false;
    for (let i = 2; i < number; i++)
        if (number % i === 0)
            return false;

    return true;
}


export const sleep = (time:number) => new Promise(resolve => setTimeout(resolve, time))

//type Status="idle"|"done"|"error"|"aborted"|"started"

export enum Status{ idle, started, done, error, aborted};

export interface PrimeTask{
    status: Status,
    primes: number[],
    min:number,
    max:number,
    error?:Error
    cancellationRequested?:boolean
}


export async function findPrimes(task:PrimeTask) {
    let min = Number(task.min)
    let max = Number(task.max)
    // task.primes = []

    const checkError = (errorCondition:boolean, errorType:string) => {
        if (errorCondition)
            throw new Error(`Invalid ${errorType}`)

        //enjoy. do nothing. no new===good news
    }


    try {
        checkError(isNaN(min), "min")
        checkError(isNaN(max), "max")
        checkError(min >= max, "range")
    } catch (err:unknown) {
        task.status = Status.error;
        task.error = err as Error;  //typecast to error as we know it will be Error
        throw err;
        return //no need to process remaining funciton
    }

    task.status = Status.started;
    for (let i = min; i < max; i++) {
        if (isPrime(i))
            task.primes.push(i);

        if (i % 1000 == 0) {
            await sleep(0)

            if (task.cancellationRequested) {
                task.status = Status.aborted
                throw new Error(`Aborted`)
            }
        }
    }
    task.status = Status.done
    return task;



}


