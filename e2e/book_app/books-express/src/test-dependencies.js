import { InvalidIdError } from './utils/exceptions.js'
import injector from './utils/injector.js'

const authors=[
    {id:'vivek',name:'Vivek'},
    {id:'sanjay',name:'Sanjay'},
]

class AuthorService{
    async getAllAuthors(){
        return authors
    }

    async getAuthorById(id){
        const author = authors.find(a=>a.id===id)
        if(author)
            return author
        else
            throw new InvalidIdError(id)
    }
}

injector
    .add("authorService", AuthorService)

class UserService{

}

injector
    .add("userService", UserService)

