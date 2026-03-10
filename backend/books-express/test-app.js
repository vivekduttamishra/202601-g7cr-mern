export class AuthorService{

    constructor(authorRepository,bookRepository){
        this.repository=authorRepository
    }

    async getAllAuthors(){
        return await this.repository.getAll()
    }
}

let str= AuthorService.toString();
let constructorStart =str.indexOf("constructor")
if(constructorStart!==-1){
    str=str.substring(constructorStart+'constructor'.length)
    let end = str.indexOf(")")
    str=str.substring(0,end)
    str=str.replace("(","").trim().split(',').map(s=>s.trim()).filter(s=>s)
    
}

console.log('str',str);

