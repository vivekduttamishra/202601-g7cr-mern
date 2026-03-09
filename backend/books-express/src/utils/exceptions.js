export class InvalidIdError extends Error{
    constructor(id, message){
        super(message??`Invalid Id: ${id}`)
        this.id=id
    }
}