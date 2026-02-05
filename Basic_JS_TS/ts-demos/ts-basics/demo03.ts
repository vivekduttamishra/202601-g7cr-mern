function sum(...numbers:number[]) {
    
    return numbers.reduce((s,v)=>s+v,0)
}

let r= sum(1,2,3,4)
console.log('sum',r)