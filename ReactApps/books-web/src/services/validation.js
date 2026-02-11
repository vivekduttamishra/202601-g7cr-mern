
export class ValidationError extends Error{
    constructor(errorMessage, context, key){
        super(errorMessage);
        this.context=context;
        this.key=this.key;
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




/* suppose you want to test if book title is required

    required('Book Title is Required')(book.title, 'title', book)

*/