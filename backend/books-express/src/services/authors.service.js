
export class AuthorService{

    constructor(repository){
        this.repository=repository
    }

    async getAllAuthors(){
        return await this.repository.getAll()
    }
}

export default new AuthorService();