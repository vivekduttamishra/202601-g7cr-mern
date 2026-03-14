import request from 'supertest'
import injector from '../utils/injector.js'
import { AssertionError, should } from 'chai'
import { InvalidIdError } from '../utils/exceptions.js'
import {createToken} from '../utils/jwt.js'

should()

describe('Simple Author Route Tests', () => {

    const authors = [
        { id: 'vivek', name: 'Vivek' },
        { id: 'sheha', name: 'Shesha' }
    ]

    let app
    let authorService;

    beforeEach(async () => {

        // class AuthorService {
        //     async getAllAuthors() {
        //         return authors
        //     }
        // }

        authorService={}

        injector.reset()

        injector.add("authorService",{instance:authorService})
        injector.add("userService", {instance:{}})

        const module = await import("../app.js")
        app = module.default
    })

    it('should return all authors', async () => {
        
        authorService.getAllAuthors=async()=>authors


        const response = await request(app)
                                    .get("/api/authors")
        
        
        response.status.should.equal(200)
        response.body.map(a=>({id:a.id,name:a.name})).should.deep.equal(authors)

    })

    it('should return author by id',async ()=>{
        
        authorService.getAuthorById= async(id)=> ({id, name:id})
        let id='vivek'
        const response = await request(app).get("/api/authors/"+id)
        response.status.should.equal(200)
        response.body.should.have.property('name',id)
        
    })

    it('should return 404 for invalid id', async()=>{
        const id='invalid-id'
        const message='Invalid Author'
        authorService.getAuthorById=async(id)=>{ throw new InvalidIdError(id,message) }

        const response=await request(app).get("/api/authors/"+id)

        response.status.should.equal(404)
        console.log('response.body',response.body);
        response.body.should.deep.equal({id,message})

    })


    it('should return 401 while adding author without valid token',async()=>{
        
        let serviceCalled=false
        authorService.addAuthor=async(author)=>{
          serviceCalled=true
          return author
        }
        
        const response =await request(app)
                            .post('/api/authors')
                            .send(authors[0])
        console.log('response.status',response.status);
        console.log('serviceCalled',serviceCalled);
        
        
        response.status.should.equal(401)
        serviceCalled.should.equal(false)

    })
    it('should return 201 when adding author with valid token',async()=>{
        
        let serviceCalled=false
        authorService.addAuthor=async(author)=>{
          serviceCalled=true
          return author
        }
        let token= await createToken({id:'vivek'})
        console.log('token',token);
        token = `BEARER ${token}`
        
        const response =await request(app)
                            .post('/api/authors')
                            .set("Authorization", token)
                            .send(authors[0])

        response.status.should.equal(201)
        serviceCalled.should.be.true

    })

})