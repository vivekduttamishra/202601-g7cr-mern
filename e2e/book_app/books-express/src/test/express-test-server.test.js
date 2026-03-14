import {expect,should } from 'chai'
import axios from 'axios'

describe('express server tests',()=>{
    const baseUrl='http://localhost:5001/api/authors'
    it('should return valid author with valid id',async()=>{

        const response = await axios.get(`${baseUrl}/vivek`)
        response.status.should.equal(200)
        response.data.name.should.equal('Vivek')

    })
    it('should return 404 for invalid id',async()=>{

        try{

            const response = await axios.get(`${baseUrl}/invalid-id`)
        }catch(err){
            console.log('err.status',err.status);
            
            err.status.should.equal(404)
        }

       
        
        

    })


})