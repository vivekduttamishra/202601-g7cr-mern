

const PrimeUtils = (function () {

    function isPrime(number) {
        if (number < 2)
            return false;
        for (let i = 2; i < number; i++)
            if (number % i === 0)
                return false;

        return true;
    }

    function findPrimes1(task) {
        let min = Number(task.min)
        let max = Number(task.max)
        // task.primes = []

        const checkError = (errorCondition, errorType) => {
            if (errorCondition)
                throw new Error(`Invalid ${errorType}`)

            //enjoy. do nothing. no new===good news
        }

        return new Promise(function (resolve, reject) {

            try {
                checkError(isNaN(min), "min")
                checkError(isNaN(max), "max")
                checkError(min >= max, "range")
            } catch (err) {
                task.status = "error"
                task.error = err
                reject(err)
                return //no need to process remaining funciton
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



                if (task.cancellationRequested) {
                    task.status = "cancelled";
                    clearInterval(iid);
                    // return cb(null, task)
                    return reject(new Error("Aborted"))
                }

                lo = hi
                hi = upperBound(lo + 1000, max)

                if (hi >= max) {
                    //GREAT NEW. WORK DONE
                    task.status = "done"
                    clearInterval(iid)
                    return resolve(task)
                }


            }, 0); // give up control for a minimal time
        })




    }

    const sleep = time => new Promise(resolve => setTimeout(resolve, time))

    async function findPrimes(task) {
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
            reject(err)
            return //no need to process remaining funciton
        }

        task.status='started';
        for(let i=min;i<max;i++){
            if(isPrime(i))
                task.primes.push(i);

            if(i%1000==0){
                await sleep(0)

                if(task.cancellationRequested){
                    task.status='cancelled'
                    throw new Error(`Aborted`)
                }
            }
        }
        task.status="done"
        return task;
     


    }


    return {
        isPrime,
        findPrimes
    }
}
)();