import { Book, Author, Review } from './sequelize/index.js';

/** --- BOOK CRUD --- **/

export async function addBook(title,  authorId, price, details, cover) {
  let id=title.toLowerCase().split(' ').join('-')
  const data = { id  , title, price, authorId, details, cover:cover?? id+'.jpg' }
  let result= await Book.create(data);
  return result.get({plain:true})
}

export async function getAllBooks() {
  // Returns all books with their Author's name and bio included
  let books= await Book.findAll({ 
    include: [{ model: Author, attributes: ['name', 'id'] }] 
  })
  return books.map(b=> b.get({plain:true}))
}

export async function getBookById(id) {
  // Returns a specific book with its Author and all its Reviews
  let book= await Book.findByPk(id, { 
    include: [Author, Review] 
  });

  return book.get({plain:true})
}

export async function updateBook(id, updateData) {
  const book = await Book.findByPk(id);
  if (!book) throw new Error('Book not found');
  return await book.update(updateData);
}

export async function deleteBook(id) {
  return await Book.destroy({ where: { id } });
}


export async function addReview(book_id, reviewer, title, review, rating) {
  const reviewData= {book_id, reviewer, title, review, rating }
  return await Review.create(reviewData);
}

export async function deleteReview(reviewId) {
  return await Review.destroy({ where: { id: reviewId } });
}

export async function getRecentReviews(limit = 5) {
  return await Review.findAll({
    limit: limit,
    order: [['createdAt', 'DESC']],
    include: [Book]
  });
}