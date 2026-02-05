class Person{
    private name:string;
    private biography:string;   

    constructor(name:string, biography:string){
        this.name=name;
        this.biography=biography;
    }
}

class Author extends Person{

    constructor(
        name:string, 
        biography:string,
        private books:Book[]=[]
    ){
        super(name,biography)
    }
}

class Book{}

let author = new Author('Vivek Dutta Mishra', 'Author of the lost epic series')
console.log('author',author);
