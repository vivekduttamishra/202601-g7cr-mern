import assert from 'node:assert'
//import {describe, it, beforeEach} from 'node:test'
import { isPrimeSync, findPrimes } from './primes.js'

xdescribe('primes test',()=>{

    describe('isPrimeSync tests',()=>{
        it('should return true for 2',()=>{
            assert.equal(isPrimeSync(2), true)
        })
        it('should return false for 12',()=>{
            assert.equal(isPrimeSync(12),false)
        })
    })

    describe('findPrimes tests',()=>{

        it('should return 25 primes under 100',async()=>{
            let primes = await findPrimes(0,100)

            assert.equal(primes.length,25)
        })

    })


})