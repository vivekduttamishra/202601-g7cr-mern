function BookDetails({ selectedBook }) {

    //let {selectedBook} = props;

    if (!selectedBook)
        return (<div className="book-details">
                    <h3>Please Select a book</h3>
                </div>)

    //else display book info
    return <div className='book-details'>
        <h2>{selectedBook.title}</h2>
        <div className='wrapper'>
            <div className='left'>
                <img className='book-cover' src={selectedBook.cover} />
                <button className='danger'> Delete Book</button>
            </div>
            <div className='right'>
                <ul>
                    <li>Author:{selectedBook.author}</li>
                    <li>Price:₹{selectedBook.price}</li>
                    <li>Rating:{selectedBook.rating} / 5 </li>
                </ul>
                <h3>Details</h3>
                {selectedBook.description}
            </div>
        </div>
    </div>
}


export default BookDetails;