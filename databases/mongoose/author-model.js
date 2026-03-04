import mongoose, { mongo }  from "mongoose";

//define author schema

const authorSchema = new mongoose.Schema({

    id: {type:String, required:true},
    name:{type:String,required:true},

    bio:{type:String, minLength:20, maxLength:2000, required:true},
    image: {type:String, default:"unnown-author.png" },
    tags: {type:[String], maxLength:5 }

})


//define a model that will use schema

export const Author = mongoose.model("authors", authorSchema)

export default Author

