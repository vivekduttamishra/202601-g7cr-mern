

const PrimeUtils = (function () {

    function isPrime(number) {
        if (number < 2)
            return false;
        for (let i = 2; i < number; i++)
            if (number % i === 0)
                return false;

        return true;
    }

    function findPrimes(min, max) {
        min=Number(min)
        max=Number(max)
        let primes = []
        if (isNaN(min))
            throw new Error(`Invalid Min: ${min}`)
        if (isNaN(max))
            throw new Error(`Invalid Max: ${max}`)

        if (min >= max)
            throw new Error(`Invalid Range: ${min}-${max}`)

        for (let i = min; i < max; i++) {
            if (isPrime(i))
                primes.push(i)
        }

        return primes
    }


    return {
        isPrime,
        findPrimes
    }
}
)();