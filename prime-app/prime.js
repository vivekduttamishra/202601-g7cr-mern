

const PrimeUtils = (function () {

    function isPrime(number) {
        if (number < 2)
            return false;
        for (let i = 2; i < number; i++)
            if (number % i === 0)
                return false;

        return true;
    }

    function findPrimes(min, max,cb) {
        min=Number(min)
        max=Number(max)
        let primes = []
        if (isNaN(min))
            return cb(new Error(`Invalid Min : ${min}`))
        if (isNaN(max))
            return cb(new Error(`Invalid Max: ${max}`))

        if (min >= max)
            return cb( new Error(`Invalid Range: ${min}-${max}`))


        for (let i = min; i < max; i++) {
            if (isPrime(i))
                primes.push(i)

            setTimeout(()=>{
                //wait
            },1000)
        }

        cb(null,primes)
    }


    return {
        isPrime,
        findPrimes
    }
}
)();