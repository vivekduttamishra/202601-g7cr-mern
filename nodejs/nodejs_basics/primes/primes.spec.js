import { AssertionError, expect, should } from 'chai'
import { isPrimeSync, findPrimes } from './primes.js'
should()


describe('isPrimeSync specs', function () {

    it('should emit true for prime number', function () {
        let knownPrimes = [2, 13, 5, 31, 101]
        knownPrimes.forEach(number => {
            expect(isPrimeSync(number)).to.be.true
        })

    })
    it('should emit false for non prime number', function () {
        let knownNonPrimes = [0, -1, 1, 22, 15, 51, 30, 100]
        knownNonPrimes.forEach(number => {
            expect(isPrimeSync(number)).to.be.false
        })

    })


})

describe('find-primes sepcs', () => {

    it('should emit "error" for invalid range', function (done) {
        let min=100;
        let max=2;
        let event = findPrimes(min,max)

        event.on('error', error=>{
            error.message.should.include('Invalid Range')
            error.range.min.should.equal(min)
            error.range.max.should.equal(max)
            done();
        })


    })
    
    it('should emit "done" when all primes are found', function (done) { 

        let min=2
        let max=100

        let event = findPrimes(min,max);

        event.on('done', count=>done());
        event.on('error',()=> done(new AssertionError('error should not be emitted')))


    })
    it('should emit "done" when count of all primes found', function (done) { 

        let min=2
        let max=100

        let event = findPrimes(min,max);

        event.on('done', count=>{
            count.should.equal(25)
            done()
        });
        event.on('error',()=> done(new AssertionError('error should not be emitted')))


    })
    it('should emit "prime-found" for each prime found', function (done) { 

        let event = findPrimes(2,100)
        let primeFoundCalls=0;
        event.on('prime-found',()=>{
            primeFoundCalls++;
        })

        event.on('done', count=>{
            primeFoundCalls.should.equal(count);
            done();
        })

    })
    it('should emit "prime-found" for each valid prime only', function (done) { 

        done(new AssertionError('do this code'))

    })
    xit('should emit "progress" once for every percentage', function (done) { })
    xit('should abort or receiving "abort-requested" signal', function (done) { })
    xit('should handle abort-request only after every 100 prime found.', function (done) { })
    xit('should emit "abort" when aborted', function (done) { })

})        
