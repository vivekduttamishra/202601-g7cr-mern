
export class AuthorService{

    constructor(authorRepository){
        this.repository=authorRepository
    }

    async getAllAuthors(){
        return await this.repository.getAll()
    }

    async getAuthorById(id){
        return await this.repository.getById(id)
    }

    async addAuthor(author){
        //validate author details
        return await this.repository.add(author)
    }

    async removeAuthor(id){
        return await this.repository.remove(id)
    }

    async updateAuthor(id, author){
        return await this.repository.update(id,author);
    }
}

export default new AuthorService();