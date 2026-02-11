
export class ValidationError extends Error{
    constructor(errorMessage, key, context){
        super(errorMessage);
        this.context=context;
        this.key=key;
    }
}

export class ValidationModel{
    constructor(dataType, defaultValue, ...validations){
        this.dataType=dataType,
        this.defaultValue=defaultValue,
        this.validations=validations;
    }
}




export const throwOnError= (errorCondition, errorMessage, key, context)=>{
    if(errorCondition){
        throw new ValidationError(errorMessage, key, context);    
    }
}

export const required= (errorMessage="Required") =>(value, key,context)=> throwOnError(!value || !value.trim, errorMessage,key,context)

export const isNumber=(errorMessage="Should be Number") => (value, key,context)=>{
    throwOnError( isNaN(value), errorMessage, key, context)
}

export const min = (min,errorMessage)=>(value,key,context)=>{
    throwOnError(value<min,  errorMessage|| `${key} should not be less than ${min}`, key,context)
}

export const max = (max,errorMessage)=>(value,key,context)=>{
    throwOnError(value>max,  errorMessage|| `${key} should not be more than ${max}`, key,context)
}

export const minLength = (min,errorMessage)=>(value,key,context)=>{
    throwOnError(value.length < min,  errorMessage|| `${key} should not be less than ${min}`, key,context)
}

export const maxLength = (max,errorMessage)=>(value,key,context)=>{
    throwOnError(value.length>max,  errorMessage|| `${key} should not be more than ${max}`, key,context)
}


// final validator

function validateKey (obj, model, key){

    let {validators} = model[key]
    if(!validators)
        return;

    const valueToValidate=obj[key];
    for(const validator of validators){
        try{

            validator(valueToValidate, key, obj)
        }catch(error){
            return {[key]: error.message};
        }
    }
}

export class ValidationSummaryError extends Error{
    constructor(info){
        super("Validation Error")
        this.info=info;
    }
}


export function validate( obj, model, key){

    let errors={}
    let errorCount=0;

    if(key){
        let error= validateKey(obj,model,key)
        if(error){
            throw new ValidationSummaryError({
                count:1,obj, model,
                errors:{[key]: error[key]}
            })
        }
    }
    
    
    for(let key in model){
        let error = validateKey(obj, model, key)
        if(error){
           // console.log('validation error detected',error)
            errorCount++;
            errors[key]=error[key]
        }       
    }

    if(errorCount){
        throw new ValidationSummaryError( {
            count:errorCount, 
            obj, 
            model, 
            errors});
    }
    //no new is good news
}





/* suppose you want to test if book title is required

    required('Book Title is Required')(book.title, 'title', book)

*/