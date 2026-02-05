import { isPrime, findPrimes } from '../src/prime.js'

import { expect, should } from 'chai'

should(); // to use should you should call it as a fuction first


describe('prime.js', () => {

    describe('isPrime', () => {

        it('should return true for 23', () => {
            expect(isPrime(23)).to.be.true
        })

        it('should return false for 44', () => {
            isPrime(44).should.be.false
        })

    })

    describe('findPrimes', () => {
        it('should have 10 primes between 50-100 ', () => {
            findPrimes(50, 100).should.have.length(10)
        })

        it('should contain 53 as prime between 50-100', () => {
            findPrimes(50, 100).should.contain(53)
        })

        it('should throw error for invalid min', () => {

            //should will not execute and finPrimes throws and not returns anything
            //findPrimes('hello',100).should.throw()

            //we must use expect/assert
            expect(() => findPrimes('Hi', 50)).to.throw('Invalid min')
        })

        it('should return 25 primes between 0-100', () => {
            findPrimes(0, 100).should.have.length(25)
        })

        it('should contain primes between 2-10', () => {
           let primes= findPrimes(2, 10)
           primes.should.have
                    .length(4)
                    .and
                    .members([5,2,3,7])
        })
    })
})