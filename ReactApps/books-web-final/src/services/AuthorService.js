import http from './http'

export class AuthorService{

    async getAllAuthors(){
        // http://localhost:4000/api/authors
        try{

            const response = await http.get("/authors") 
            //console.log('response.data',response.data);
            
            return response.data
        }catch(err){
            window.err=err
            console.log('err',err);
            
            throw err;
        }

    }

    async getAuthorById(id){
        //http://localhost:400/api/author/{id}
        const response=await http.get(`/authors/${id}`)
        return response.data
    }
}