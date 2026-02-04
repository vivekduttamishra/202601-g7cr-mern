import  {use, expect, should } from 'chai'
import { findPrimes } from '../src/prime-promise.js'
import chaiAsPromised from 'chai-as-promised'
should()
use(chaiAsPromised) //configure the plugin



function createPrimeTask(min, max) {
    return {
        min, max,
        primes: []
    }
}

describe('prime-promise', function () {


    describe('using callback', function () {

        it('should return 25 primes under 100', function (done) {

            findPrimes(createPrimeTask(0, 100))
                .then(task => {
                    try {
                        task.status.should.equal('done')
                        task.primes.should.have.length(26)
                        done() //test passed
                    } catch (error) {

                        done(error) //done with errorS
                    }
                })

        })

        it('should return error for invalid range', function (done) {
            findPrimes(createPrimeTask(100, 0))
                .catch(error => {
                    try {

                        error.message.should.equal('Invalid range')
                        done()
                    } catch (error) {
                        done(error)
                    }
                })
        })

    })



    describe('async function', function () {

        it('should return 25 primes under 100', async function () {

            let task = await findPrimes(createPrimeTask(0,50000))
            task.status.should.equal('done')
            task.primes.should.have.length(5133)

        })

        it('should return error for invalid range', async function () {
            
            let task = createPrimeTask(100,0)
            try{
                await findPrimes(task)
            }catch(error){
                error.message.should.equal(task.error.message)
                task.status.should.equal('error')
            }
        })

    })
    describe('chai-as-promised', function () {

        it('should return 25 primes under 100', async function () {

            await findPrimes(createPrimeTask(0,100))
                    .should
                    .eventually      //once resolved
                    .include({'status':'done'})
                    .and
                    .have
                    .property('primes')
                    .with.length(25);

                    

        })

        it('should return error for invalid range', async function () {
            
           await findPrimes(createPrimeTask(100,1))
                    .should
                    .eventually
                    .be.rejectedWith('Invalid range')
        })

    })



})