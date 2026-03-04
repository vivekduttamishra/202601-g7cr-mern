import mongoose from 'mongoose'

let url='mongodb://localhost/booksdb'

export async function connect(){
    await mongoose.connect(url)
}