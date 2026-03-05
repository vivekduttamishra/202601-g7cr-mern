import appServer from "./app-server.js";
import fs from 'fs'


let books =JSON.parse( fs.readFileSync('./data/books.json'))
//let books=[]




appServer.addRoute((request,response)=>{
    if(request.url==='/books' && request.method==="GET"){
        response.end(JSON.stringify(books))    
    }else
        return true; //go to next
})

appServer.addRoute((request,response)=>{
    if(request.url!=='/books/the-accursed-god')
        return true; //go to next
    console.log('searching book the-accursed-god')
    response.end(JSON.stringify(books.find(b=>b._id==='the-accursed-god')))    
})

appServer.addRoute((request,response)=>{

    if(request.url==='/books' && request.method==='POST'){
        //handle the post request
        response.end(JSON.stringify({status:201, message:'book added'}))
    }
    else
        return true;

})