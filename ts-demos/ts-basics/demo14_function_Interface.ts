interface Stack<T>{
    
    //normal funciton format
    push(item:T):boolean;
    
    pop():T;

    //arrow function format
    isEmpty: ()=>boolean;

}

class DynamicStack<T> implements Stack<T>{
    
    private element:T[]=[]
    

    push(item: T): boolean {
        this.element.push(item);
        return true;
    }

    pop(): T {
        if(!this.isEmpty())
            return this.element.pop()! //I know it will not eb null !
        else
            throw new Error(`Stack Underflow`)

    }
    isEmpty= ()=>this.element.length===0;   

}