import {expect, should} from 'chai';
import {findPrimes} from '../src/prime-cb.js'

should(); //it updates the Object prototype with should

function createPrimeTask(min,max){
    return {
        min,max,
        primes:[],
        status:'idle'
    }
}


describe('prime-cb',()=>{

    describe('findPrimes',()=>{

        describe('happy path with result',()=>{

            it('should have 25 primes under 100', ()=>{
    
                findPrimes(createPrimeTask(0,100),(error,task)=>{
                    //should can't be injected to null
                    //error.should.be.null;
                    expect(error).to.be.null;
                    task.primes.should.have.length(25);
                            
                });
    
            });
    
            
    
            it('should have right number of  primes under 50000', (done)=>{
    
                findPrimes(createPrimeTask(0,50000),(error,task)=>{
                    //should can't be injected to null
                    //error.should.be.null;
                    expect(error).to.be.null;
                    
                    task.primes.should.have.length(5133); //49999
                    task.primes.pop().should.equal(49999);
                    done(); //let mocha know test is done 
                });
    
            });
    
            it('should contain primes between 2-10',()=>{
                findPrimes(createPrimeTask(2,10), (error,task)=>{
                    expect(error).to.be.null
                    task.primes.should.have
                        .length(4)
                        .and
                        .members([5,2,3,7])
                })
            })

            it('should have right number of primes under 500000',function(done){
                this.timeout(20000); 
                findPrimes(createPrimeTask(0,500000),(error,task)=>{
                    expect(error).to.be.null;
                    expect(task.status).to.equal('done')
                    expect(task.primes).to.have.length(41538)
                    done()
                })

            });
        })


        describe('error path',()=>{
        
            it('should return min error for invalid min value',(done)=>{

                let task=createPrimeTask('Hi',100);
                findPrimes(task,(error)=>{

                    error.message.should.include('Invalid min')
                    task.status.should.equal('error')
                    done()
                })

            })

        
        })


    })


})