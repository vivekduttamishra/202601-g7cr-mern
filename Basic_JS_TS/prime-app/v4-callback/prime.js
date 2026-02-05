

const PrimeUtils = (function () {

    function isPrime(number) {
        if (number < 2)
            return false;
        for (let i = 2; i < number; i++)
            if (number % i === 0)
                return false;

        return true;
    }

    function findPrimes(task, cb) {
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
            return cb(err)
        }


        const upperBound = (one, two) => one < two ? one : two

        let lo = min
        let hi = upperBound(lo + 1000, max)

        task.status = 'started'
        const iid = setInterval(() => {
            for (let i = lo; i < hi; i++) {
                if (isPrime(i))
                    task.primes.push(i)
            }

            let pc = Math.ceil((hi - min) / (max - min) * 100)
            task.percent=pc
            cb(null , task);

            if (task.cancellationRequested) {
                task.status = "cancelled";
                clearInterval(iid);
                // return cb(null, task)
                return cb(new Error("Aborted"))
            }

            lo = hi
            hi = upperBound(lo + 1000, max)

            if (hi >= max) {
                //GREAT NEW. WORK DONE
                task.status = "done"
                clearInterval(iid)
                return cb(null, task)
            }


        }, 0); // give up control for a minimal time

    }


    return {
        isPrime,
        findPrimes
    }
}
)();