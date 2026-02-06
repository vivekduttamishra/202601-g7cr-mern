import React from 'react';


class BookList extends React.Component {

    state={
        selectedIsbn:null
    }
    
    render=()=> {
    
        let {books}=this.props;

        const onBookSelect = isbn => {
            this.setState({selectedIsbn:isbn})
            this.props.onBookSelect(isbn);
        }

        const getClass=(isbn)=> {
            let baseClass='book-nav-item ';
            if(isbn===this.state.selectedIsbn)
                baseClass+="selected-book"
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

}

export default BookList;