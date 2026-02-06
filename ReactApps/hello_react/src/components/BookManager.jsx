
import books from '../data/books.json'
import BookList from './BookList'
import BookDetails from './BookDetails'
import React from 'react'


class BookManager extends React.Component{

    state={
        selectedBook:books[0],
        books:books
    }

    render() {
    
        const handleBookSelect= isbn=>{
            console.log('BookManager got', isbn, ' from the child')
            const selectedBook= books.find(b=>b.isbn===isbn)

            this.setState({selectedBook})
        }
    
        const handleBookDelete = isbn =>{
            console.log('deleting',isbn);
            //lets delete the book
            let newBookList = this.state.books.filter(b=>b.isbn!==isbn)
            this.setState({
                books:newBookList,
                selectedBook:null
            })
        }
    
        return (<div className='book-manager'>
            <h2>Book Manager</h2>
            <div className="wrapper">
                <BookList books={this.state.books} 
                          selectedBook={this.state.selectedBook}
                          onBookSelect={handleBookSelect} 
                          
                          />
    
                <BookDetails selectedBook={this.state.selectedBook} 
                            onBookDelete={()=>handleBookDelete(this.state.selectedBook.isbn)}/>
    
    
            </div>
    
        </div>)
    }
}



export default BookManager