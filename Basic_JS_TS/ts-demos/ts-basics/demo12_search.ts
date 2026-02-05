
import {search} from './utils.js'

type Book={ title:string, author:string, price:number};

let books:Book[]=[
    {title:'The Accursed God', author:'Vivek Dutta Mishra', price:399},
    {title:'JavaScript Basics', author:'John Doe', price:299},
    {title:'TypeScript in Depth', author:'Jane Smith', price:499},
    {title:'Learning Python', author:'Alice Johnson', price:599},
    {title:'Effective Java', author:'Bob Brown', price:699}    
]





let result = search(books,(book)=>book.price<400)
result.forEach(console.log)