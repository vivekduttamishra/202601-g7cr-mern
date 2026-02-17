import { type Book } from '../types/Book'

import {delay} from './delay'
import api from './api'


let uri="books"

class BookService {
  

    async getAllBooks(){
        await delay(1000)
        let response = await api.get(uri)
        return response.data;
    }

    async getBookById(id:string):Promise<Book>{
        await delay(1000)
       let response= await api.get(`${uri}/${id}`)
       return response.data;
    }

    async deleteBookById(id:string){
        await delay(1000)
        let response= await api.delete(`${uri}/${id}`)
    }

    async addBookBy(book:Book){
        await delay(1000)
        let response= await api.post(uri, book)
        return response.data;
    }

}

export default new BookService()

