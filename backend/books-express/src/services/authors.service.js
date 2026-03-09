
export class AuthorService{

    constructor(authorRepository){
        this.repository=authorRepository
    }

    async getAllAuthors(){
        return await this.repository.getAll()
    }
}

export default new AuthorService();