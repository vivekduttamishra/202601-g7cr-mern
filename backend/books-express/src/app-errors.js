import { ErrorChain } from "./utils/ErrorChain.js";
import { HttpError, ValidationError, InvalidIdError, AuthenticationError, DuplicateIdError } from './utils/exceptions.js'


const appErrors = new ErrorChain();

appErrors
    .addInstanceHandler(HttpError, (error) => ({
        status: error.status,
        body: error.body
    }))
    .addInstanceHandler(ValidationError,(error)=>({
        status:400,
        body:{
            message:"Validation Error",
            errors: error.errors
        }
    }))
    .addInstanceHandler(InvalidIdError, error=>({
        status:404,
        body:error.info
    }))
    .addInstanceHandler(DuplicateIdError, error=>({
        status:400,
        body:error.info
    }))
    .addInstanceHandler(AuthenticationError, error=>{

        const status= error.requiredRoles?.length? 403 : 401
        const message= status===401?"UnAuthenticated": "UnAuthorized"
        
        return {
            status,
            body:{
                message,
                requiredRoles: error.requiredRoles
            }
        }

    })




export default appErrors;