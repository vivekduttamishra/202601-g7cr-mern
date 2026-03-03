import { MongoClient } from "mongodb"

const connectionString='mongodb://localhost'
const client = new MongoClient(connectionString)

async function getCollection(collectionName) {
  console.log('getCollection called, connecting...');
  await client.connect();
  console.log('connect done');
  
  const db = client.db('booksdb');
  const collection = db.collection(collectionName);
  return collection;
}

export async function getAllBooks(){

    let collection= await getCollection('books');
    let books =await collection.find().toArray()
    return books
   
}

export async function getBookTitles() {
  console.log('getBookTitles start');
  const collection = await getCollection('books');
  console.log('collection ready');
  
  let titles = await collection.aggregate([
    { $project: { title: 1, _id: 0 } }
  ]).toArray();
  console.log('aggregate done');
  
  console.log('closing client...');
  await client.close({ force: true });
  console.log('client closed');
  
  return titles.map(o => o.title);
}

export async function getBookByAuthor(authorId){
    const collection=await getCollection('books')

    let books=await collection.aggregate([
        {
            $lookup:{
                from:'authors',
                localField:'authorId',
                foreignField: 'id',
                as: 'author'
            }
        },
        {$unwind:"$author"},
        {$match:{authorId}},
        {$project:{title:1, author: "$author.name", _id:0}}
    ]).toArray()

    return books

}

export async function addBook(title, authorId, price, rating){
    let id = title.toLowerCase().split(' ').join('-')
    let authorCollection = await getCollection('authors')
    let author = await authorCollection.findOne({id:authorId})
    
    if(author){
        let booksCollection = await getCollection('books')
        let result= await booksCollection.insertOne({id,title,authorId,price,rating})
        let book = await booksCollection.findOne({id})
        client.close();
        return book;
    }else{
        throw new Error(`Invalid Author Id: ${authorId}`)
    }
}