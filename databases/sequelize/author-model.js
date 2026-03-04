import mongoose, { mongo }  from "mongoose";

//define author schema

const authorSchema = new mongoose.Schema({

    _id: String, //will be auto generated
    name:{type:String,required:true},

    bio:{type:String, minLength:20, maxLength:2000, required:true},
    image: {type:String, default:"unnown-author.png" },
    tags: {type:[String], maxLength:5 }

})

//auto executable function before saving

authorSchema.pre('save',function(){
    if(!this._id || !this._id.trim())
        this._id=this.name.toLowerCase().split(' ').join('-')
})


//define a model that will use schema

export const Author = mongoose.model("authors", authorSchema)

export default Author

