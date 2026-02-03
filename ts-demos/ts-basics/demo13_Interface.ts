
interface Book {
    title: string,
    author: string,
    price: number
}

class TextBox implements Book {
    title: string;
    author: string;
    price: number;
    isPublished: boolean;
    constructor(title: string, author: string, price: number, isPublished: boolean) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.isPublished = isPublished
    }

}

let myBook: Book = {
    title: 'The Accursed God',
    author: 'Vivek Dutta Mishra',
    price: 399,
    isPublished:false
}