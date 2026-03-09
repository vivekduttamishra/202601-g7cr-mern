

class Service{
    constructor(authorRepository, bookRepository,){

    }

    async getAll(){

    }
}

let str = Service.toString()
let index = str.indexOf("constructor")
if(index===-1)
    str=[]
else{
    str=str.substring(index+'constructor'.length)
    index=str.indexOf(")")
    str=str.substring(0,index).replace('(','').split(",").map(a=>a.trim()).filter(a=>a)
}


console.log(str)
 