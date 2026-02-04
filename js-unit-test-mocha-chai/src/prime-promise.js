import {isPrime} from './prime.js'

const sleep = time => new Promise(resolve => setTimeout(resolve, time))

export async function findPrimes(task) {
    let min = Number(task.min)
    let max = Number(task.max)
    // task.primes = []

    const checkError = (errorCondition, errorType) => {
        if (errorCondition)
            throw new Error(`Invalid ${errorType}`)

        //enjoy. do nothing. no new===good news
    }


    try {
        checkError(isNaN(min), "min")
        checkError(isNaN(max), "max")
        checkError(min >= max, "range")
    } catch (err) {
        task.status = "error"
        task.error = err
        throw err;
        return //no need to process remaining funciton
    }

    task.status = 'started';
    for (let i = min; i < max; i++) {
        if (isPrime(i))
            task.primes.push(i);

        if (i % 1000 == 0) {
            await sleep(0)

            if (task.cancellationRequested) {
                task.status = 'cancelled'
                throw new Error(`Aborted`)
            }
        }
    }
    task.status = "done"
    return task;



}
