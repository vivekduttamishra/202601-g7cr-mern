import {findPrimes} from './primes.js'

//findPrimes(0,100).then(console.log)

findPrimes(0,100).then(primes=>process.stdout.write(`Total primes: ${primes.length}`))