export class InvalidIdError extends Error{
    constructor(id, message){
        super(message??`Invalid Id: ${id}`)
        this.id=id
    }
}

export class ValidationError extends Error{
    constructor(errors, message="Validation Error"){
        super(message)
        this.errors=errors??{}
        
    }

    assert(condition,key,message){
        if(!condition){
            this.errors[key]=message
        }
        return this;
    }
    throwIfError(){
        if(Object.keys(this.errors).length){
            throw this;
        }
    }
}