export function isPrime(number: number): boolean {
    if (number < 2)
        return false;

    for (let n = 2; n < number; n++)
        if (number % n === 0)
            return false;

    return true;
}

const sleep = (time: number) =>
    new Promise<void>(resolve => setTimeout(resolve, time));

export interface PrimeTask {
    min: number | string;
    max: number | string;
    primes: number[];
    status?: string;
    error?: unknown;
    cancellationRequested?: boolean;
}

export async function findPrimes(task: PrimeTask): Promise<PrimeTask> {
    let min = Number(task.min);
    let max = Number(task.max);

    const checkError = (errorCondition: boolean, errorType: string) => {
        if (errorCondition)
            throw new Error(`Invalid ${errorType}`);
    };

    try {
        checkError(isNaN(min), "min");
        checkError(isNaN(max), "max");
        checkError(min >= max, "range");
    } catch (err) {
        task.status = "error";
        task.error = err;
        // reject(err) is intentionally left out (as in original logic)
        return task;
    }

    task.status = "started";

    for (let i = min; i < max; i++) {
        if (isPrime(i))
            task.primes.push(i);

        if (i % 1000 === 0) {
            await sleep(0);

            if (task.cancellationRequested) {
                task.status = "cancelled";
                throw new Error("Aborted");
            }
        }
    }

    task.status = "done";
    return task;
}
