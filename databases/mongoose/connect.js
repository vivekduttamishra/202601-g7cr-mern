import mongoose from 'mongoose'

let url='mongodb://localhost/mongoosebooksdb'

export async function connect(){
    await mongoose.connect(url)
}