
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

export const oneOf=(...values)=>(value,key,context)=>{
    throwOnError(!values.includes(value),`value should be one of ${values}`,key,context)
}

export const compareTo=(otherField)=>(value,key,context)=>{
    throwOnError(context[otherField]!==value, `${key} and ${otherField} are not same`, key,context)
}

export const email=(errorMessage="Invalid Email")=>(value,key,context)=> {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  throwOnError(! emailPattern.test(value), errorMessage, key,context)
}

export const password=({   
    minLength = 8,
    upperCase = 1,
    lowerCase = 1,
    symbols = 1
})=>(password, key, context)=> {
    const errors = [];
    let isValid = true;
    const symbolsRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/; // Common symbols

    // 1. Check minimum length
    throwOnError(password.length < minLength,
        `Must be at least ${minLength} characters long.`,
        key,context)
    

    // 2. Check minimum uppercase characters
    const upperCaseCount = (password.match(/[A-Z]/g) || []).length;
    throwOnError(
        upperCaseCount < upperCase,
        `Must contain at least ${upperCase} uppercase letter(s).`,
        key,context
    );

    // 3. Check minimum lowercase characters
    const lowerCaseCount = (password.match(/[a-z]/g) || []).length;
    throwOnError(
        lowerCaseCount < lowerCase,
        `Must contain at least ${lowerCase} lowercase letter(s).`,
        key,context
    );

    // 4. Check minimum symbols
    // This uses a regex to find any symbol and checks the count
    const symbolCount = (password.match(symbolsRegex) || []).length;
    throwOnError(
        symbolCount < symbols,
        `Must contain at least ${symbols} special symbol(s).`,
        key,context
    );

   
}


//converters

const Int=(value,key,context)=>{
    let result = parseInt(value)
    throwOnError(isNaN(result),"Should be Int",key,context)
    return result
}
const Float=(value,key,context)=>{
    let result = parseFloat(value)
    throwOnError(isNaN(result),"Should be Number",key,context)
    return result
}

const CsvArray=(value,key,context)=>{
    let array=value.split(',').filter(a=>a).map(trim)
    return array
}



// final validator



export class ValidationSummaryError extends Error{
    constructor(info){
        super("Validation Error")
        this.info=info;
    }
}


async function validateKey (model, schema, key){

    let {validators} = schema[key]
    if(!validators)
        return;

    let valueToValidate=model[key];
    
    for(const validator of validators){
        try{
            await validator(valueToValidate, key, model)
        }catch(error){
            return {[key]: error.message};
        }
    }
}

export async function validate( model, schema, key){

    let errors={}
    let errorCount=0;

    if(key){
        let error=await validateKey(model,schema,key)
        if(error){
            throw new ValidationSummaryError({
                count:1,obj: model, model: schema,
                errors:{[key]: error[key]}
            })
        }
    }
    
    
    for(let key in model){
        let error = await validateKey(model, schema, key)
        if(error){
           // console.log('validation error detected',error)
            errorCount++;
            errors[key]=error[key]
        }       
    }

    if(errorCount){
        throw new ValidationSummaryError( {
            count:errorCount, 
            obj: model, 
            model: schema, 
            errors});
    }
    //no new is good news

}





/* suppose you want to test if book title is required

    required('Book Title is Required')(book.title, 'title', book)

*/