import {ErrorChain,conditionHandler} from './ErrorChain.js'
import {expect,should} from 'chai'
import { AuthenticationError,ValidationError } from './exceptions.js'

should()

describe('ErrorChain',()=>{
    let errorChain=""

    beforeEach(()=>{
        errorChain =new ErrorChain();
    })

    it('should return default status of 500 for any error',()=>{
        const result = errorChain.execute(new Error('something went wrong'))

        result.status.should.equal(500)
        result.body.message.should.include("Internal Server Error")
        result.body.details.message.should.include("something went wrong")
    })

    

    it('should handle the error using right handler is found',()=>{
        let handler=(error,request,next)=>{
            if(error.message.toLowerCase().includes("not found")){
                return {
                    status:400,
                    body:{
                        message:"Not Found",
                        id: request.params.id
                    }
                }
            }else
                return next()
        }

        errorChain.add(handler)
        const request = {params:{id: 4}}
        let result = errorChain.execute(new Error("Book Not Found"),request)

        result.status.should.equal(400)
        result.body.id.should.equal(request.params.id)

        


    })

    it('should handle the error using default hanlder if right handler is not  found',()=>{
        let handler=(error,request,next)=>{
            if(error.message.toLowerCase().includes("not found")){
                return {
                    status:400,
                    body:{
                        message:"Not Found",
                        id: request.params.id
                    }
                }
            }else
                return next()
        }

        errorChain.add(handler)
        const request = {params:{id: 4}}
        const error=new Error("Invalid Data")
        let result = errorChain.execute(error,request)

        result.status.should.equal(500)
        result.body.details.should.equal(error)

    })
     it('should work with execptionHandler helper',()=>{

        errorChain.add( conditionHandler(
            (error,request)=> error.message.toLowerCase().includes("not found"),
            
            (error,request)=> ({status:404, body:{details:error, id:request.params.id, message:error.message}})
        ))

        errorChain.add (conditionHandler(
            (error,request)=> error instanceof AuthenticationError,
            
            (error, request)=> ({status:401, body:{ message:"UnAuthneticated", details:error}})
        ))

        const request ={params:{id:1}}

        errorChain.execute( new Error("Book Not Found"),request).status.should.equal(404)
        errorChain.execute( new AuthenticationError()).status.should.equal(401)
        errorChain.execute( new ValidationError({})).status.should.equal(500)

    })


   
})


