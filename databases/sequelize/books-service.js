import { Book } from './book-model.js'

export async function getAllBooks() {
    return await Book.find()
}

export async function addBook(title, authorId,description, price, rating, tags) {
    let book = { title, authorId, price,description, rating, tags }
    return await Book.create(book)
}

export async function getBookById(id) {
    return await Book.findById(id)
}

export async function getBooksByAuthor(authorId) {
    return await Book.find({ authorId })
}

export async function addReview(bookId, reviewer, title, text, rating) {
    let review = { reviewer, title, review: text, rating }

    return await Book.updateOne({ _id: bookId }, {
        reviews: {
            $push: review
        }
    })

}