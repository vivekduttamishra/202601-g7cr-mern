
import books from '../data/books.json'
import BookList from './BookList'
import BookDetails from './BookDetails'
import React from 'react'


class BookManager extends React.Component{

    state={
        selectedBook:null
    }

    render() {
    
       
    
        const handleBookSelect= isbn=>{
            console.log('BookManager got', isbn, ' from the child')
            const selectedBook= books.find(b=>b.isbn===isbn)
            this.setState({selectedBook})
        }
    
        
    
        return (<div className='book-manager'>
            <h2>Book Manager</h2>
            <div className="wrapper">
                <BookList books={books} onBookSelect={handleBookSelect} />
    
                <BookDetails selectedBook={this.state.selectedBook} />
    
    
            </div>
    
        </div>)
    }
}



export default BookManager