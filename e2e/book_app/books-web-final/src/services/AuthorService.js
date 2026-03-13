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

    async addAuthorManualToken(author){
        let token=localStorage.getItem("token")
        let headers={}
        if(token){
            headers["Authorization"]=`BEARER ${token}`
        }

        let response = await http.post('/authors', author, {
            headers
        })
        return response.data
    }


    async addAuthor(author){
        
        let response = await http.post('/authors', author)
        return response.data
    }


}