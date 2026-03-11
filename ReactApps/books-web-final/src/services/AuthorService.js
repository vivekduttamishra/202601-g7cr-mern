import http from './http'

export class AuthorService{

    async getAllAuthors(){
        // http://localhost:4000/api/authors
        const response = await http.get("/authors") 
        return response.data

    }

    async getAuthorById(id){
        //http://localhost:400/api/author/{id}
        const response=await http.get(`/authors/${id}`)
        return response.data
    }
}