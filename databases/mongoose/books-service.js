

export async function getAllBooks(){
    return []
}

export async function addBook(title,authorId,price,rating,tags){
    return {title,authorId,price,rating,tags}
}

export async function getBookById(id){
    return {id}
}

export async function getBooksByAuthor(authorId){
    return []
}

export async function addReview(bookId, reviewer,title,text,rating){
    return {bookId,reviewer,title,text,rating}
}