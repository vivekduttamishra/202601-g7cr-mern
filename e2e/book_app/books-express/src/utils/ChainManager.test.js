import { ChainManager } from "./ChainManager.js";
import {expect,should} from 'chai'
should()

describe('Chain Manager',function(){

    let manager;
    this.beforeEach(()=>{
        manager=new ChainManager();
    })
    it('should return undefined by default',()=>{
        expect(manager.execute()).to.equal(undefined)
    })

    it('shuould execute first item of the chain by default',()=>{
       manager
            .add(()=>1)
       
       manager.execute().should.equal(1)
    })

    it('should stop with first item of chain if next is not called',()=>{

        let context=[]
        manager
            .add(context=> context.push(1))
            .add(context=> context.push(2))

        context.should.deep.equal([1])

    })

    it('should pass next function to every handler',()=>{
        manager.add((context,next)=>{

            expect(typeof(next)).to.equal("function")
            return context
        })

        manager.execute(1).should.equal(1)
    })

    it('should call next item of the chain if next is called',()=>{
        let context=[]
        manager
                .add((context,next)=> { 
                        context.push(1)
                        return next()
                })
                .add((context,next)=> { 
                        context.push(2)
                        return 2 //no next caleld
                })
                .add((context,next)=> { 
                        context.push(1)
                        return next()
                })

        manager.execute(context).should.equal(2) //final result comes from second middleware
        context.should.deep.equal([1,2])
    })

    it('should return defaultHandler value if all members of chain calls next()',()=>{
        let context=[]
        manager.defaultHandler=(context,next)=>{

            context.push(100)
            expect(next).to.be.undefined
            return 100
        }

        manager
            .add((context,next)=>{
                context.push(1)
                return next()
            })
            .add((context,next)=>{
                context.push(2)
                return next()
            })

        expect(manager.execute(context)).to.equal(100)
        context.should.deep.equal([1,2,100])
    })

    it('should be able to call in reverse with proper next use',()=>{

        const context={accumulator:0, calls:[]}

        manager
            .add((context,next)=>{

                context.accumulator+= next() 
                context.calls.push(1)
                return context.accumulator
            })
            .add((context,next)=>{

                context.accumulator+= next()
                context.calls.push(2)
                return 2
            })
            .add((context,next)=>{

                context.accumulator+= next()
                context.calls.push(3)
                return 3
            })
            .add((context)=>{

                context.calls.push(4)
                return 4
            })

        manager.execute(context)//.should.equal(10)
        context.calls.should.deep.equal([4,3,2,1])

    })

    it('should allow a previous middleware handle error of the next',()=>{

        manager
        .add((context,next)=>{
            context.push("m1 before")
            try{
                next()
                context.push("m1 in try")
            }catch(err){
                err.message.should.equal("middleware error")
                context.push("error handled")
            }

            context.push("m1 after") //will execute

        })
        .add((context,next)=>{
            //no error here
            context.push("m2 before")
            next();
            context.push("m2 after") //will not execute
        })
        .add((context,next)=>{
            context.push("m3")
            throw new Error("middleware error")
        })

        const context=[]
        manager.execute(context)

        context.should.deep.equal(["m1 before","m2 before","m3", "error handled", "m1 after" ])


    })

})