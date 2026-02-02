class Author{
    private name:string;
    private biography:string;
    private books:Book[];

    constructor(name:string, biography:string){
        this.name=name;
        this.biography=biography;
        this.books=[]
    }
}

class Book{
    
    constructor(
        private title:string,
        private author:Author|string, //author name or full details
        private price:number
    ){
        //no code needed
    }

}