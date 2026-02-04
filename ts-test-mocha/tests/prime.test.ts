import {expect, should, use} from 'chai'
//import chaiAsPromised from 'chai-as-promised'
import {findPrimes,Status, type PrimeTask} from '../src/prime.js' //I know its ts but include .js
should();

function createPrimeTask(min:number,max: number):PrimeTask{
    return {
        min,
        max,
        primes:[],
        status:Status.idle
    }
}

describe('findPrimes', function(){

    it('should return 25 primes under 100', async function(){

        let task = await findPrimes(createPrimeTask(0,100))

        expect(task).to.have.property('primes').with.lengthOf(25)

    })


})