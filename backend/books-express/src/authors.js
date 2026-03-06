import express from 'express'
import fs from 'fs'

let authors;
fs.readFile('./data/authors.json',(error,data)=>{
    if(error){
        console.error('FATAL ERROR: Unable to load authors')
        process.exit(1)
    }else{
        authors=JSON.parse(data)
    }
})

const router = express.Router()

router
    .route("/authors") //for this route 
    .get(function(request,response){
        response.send(authors.map(a=>({id:a._id, name:a.name, image:a.image})))
    })
    .post(function(request,response){
        //console.log('request.body',request.body);
        let author = request.body;
        author._id=author.name.toLowerCase().split(' ').join('-')
        authors.push(author)
        console.log(request.originalUrl);
        
        response
            .status(201)  //create
            .set('location',`http://${request.host}${request.originalUrl}/${author._id}`) //url
            .send(author) //added object
    })


router
    .route("/authors/:id")
    .get((request,response)=>{
        const {id} = request.params;
        
        let author = authors.find(a=>a._id===request.params.id)
        console.log(id,author)
        if(author)
            response.send(author)
        else
            response.status(404).send({id:request.params.id, message:"Invalid Author Id"})
    })
    .delete((request,response)=>{
        let {id}= request.params
        let currentSize = authors.length;
        authors= authors.filter(a=>a._id!==id)
        if(currentSize===authors.length){
            //nothing matching found
            response.status(404).send({id, message:'Invalid Author Id'})
        }else{
            response.status(204).send(); //send empty
        }
    })

export default router