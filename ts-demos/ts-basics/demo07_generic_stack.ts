
class Stack<Something>{
    private elements:Something[];
    private top:number;

     constructor(){
        this.elements=[];
        this.top=0;
    }

    push(item:Something){
        this.elements.push(item)
        this.top++
    }

    pop():Something{
        if(this.elements.length)
            return this.elements.pop()!  //! --> I promise, it will not be undefined.
        else
            throw new Error(`Stack Underflow`)
    }
    isEmpty():boolean{
        return this.elements.length===0;
    }

    toString():string{
        let str='Stack[\t';
        for(let i=this.elements.length-1;i>=0;i--)
            str+=`${this.elements[i]}\t`;
        return str+="]";
    }
}

let stack:Stack<number>= new Stack<number>()

stack.push(5)
stack.push(9)
stack.push(2)

console.log(`stack = ${stack}`);

while(!stack.isEmpty()){
    console.log(`popping... ${stack.pop()}`)
}




class Book{
    constructor(private title:string, private author:string, private price:number){}
}

let bookStack = new Stack<Book>();


bookStack.push( new Book('The Accursed God', 'Vivek Dutta Mishra',399))
bookStack.push( new Book('Manas', 'Vivek Dutta Mishra',399))