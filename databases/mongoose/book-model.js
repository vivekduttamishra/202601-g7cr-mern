import mongoose, { mongo } from "mongoose";
import Author from './author-model.js'
import { Int32, ObjectId } from "bson";

//define review schema
const reviewSchema = new mongoose.Schema({
    reviewer: { type: String, required: true },
    title: { type: String, required: true },
    review: { type: String, required: true, minLength: 20, maxLength: 2000 },
    rating: { type: Int32, min: 1, max: 5 }
})



const bookSchema = new mongoose.Schema({

    //we can replace standard id with our own
    _id: {
        type: String,

    },
    title: { type: String, required: true },

    description: { type: String, minLength: 20, maxLength: 2000, required: true },
    cover: { type: String, default: "unnown-book.png" },
    tags: { type: [String], maxLength: 5 },

    //embedded object
    reviews: { type: [reviewSchema], default: [] },

    //referencing other collection
    authorId: {
        type: String,
        ref: Author,
        validate: {
            validator: async (value) => {
                let author = await Author.findById(value)
                //console.log('author in validator',value,author)
                return author !== null && author !== undefined
            },
            message: props => `Invalid Author ${props.value}`
        }

    }

})

bookSchema.pre('save', function () {
    if (!this._id || !this._id.trim())
        this._id = this.title.toLowerCase().split(' ').join('-')
})

//define a models for each collection
export const Book = mongoose.model("books", bookSchema)

//since Review is not a separate collection
//It is an embedded object
//there will be no model for Review

export default Book

