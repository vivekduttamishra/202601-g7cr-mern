import Author from './author.model.js';
import Book from './Book.js';
import Review from './Review.js';

// 1 Author has many Books
Author.hasMany(Book, { foreignKey: 'authorId' });
Book.belongsTo(Author, { foreignKey: 'authorId' });

// 1 Book has many Reviews
Book.hasMany(Review, { foreignKey: 'book_id' });
Review.belongsTo(Book, { foreignKey: 'book_id' });

export { Author, Book, Review };