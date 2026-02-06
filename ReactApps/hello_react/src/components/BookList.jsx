import React from 'react';


//class BookList extends React.Component {

// state={
//     selectedIsbn:null
// }

const BookList = ({ books, selectedBook, onBookSelect }) => {

    //let {books}=this.props;

    // const onBookSelect = isbn => {
    //     //this.setState({selectedIsbn:isbn})
    //     onBookSelect(isbn);
    // }

    const getClass = (isbn) => {
        let baseClass = 'book-nav-item ';
        //if(isbn===this.state.selectedIsbn)
        if (isbn === selectedBook?.isbn)
            baseClass += "selected-book"
        return baseClass
    }

    return (
        <div className='book-list'>
            {
                books.map(book => <div
                    className={getClass(book.isbn)}
                    key={book.isbn}
                    onClick={() => onBookSelect(book.isbn)}
                >{book.title}
                </div>)
            }
        </div>
    )
}



export default BookList;