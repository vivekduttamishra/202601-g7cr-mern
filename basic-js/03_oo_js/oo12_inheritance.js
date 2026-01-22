
class Person{
    
    constructor(name, biography){
        this.name=name;
        this.biography=biography;
    }

    getName(){
        return this.name;
    }

    toString(){
        return `Person [ ${this.name}]`
    }
};

class Author extends Person{
    constructor(name,biography){
        super(name,biography)
        this.books=[];
    }

    addBook(book){ this.books.push(book); }

    toString(){
        return super.toString()
                    .replace('Person','Author')
                    .replace(']', `, books written: ${this.books.length}]`);
    }
}

let vivek=new Author('Vivek', 'Author of The Lost Epic series')

console.log(`${vivek}`)


