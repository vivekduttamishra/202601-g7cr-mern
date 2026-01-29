
Array.prototype.each=function(callback){
    
    for(let index=0;index<this.length;index++){
        callback(this[index],index, this)
    }

}


Array.prototype.transform=function(transformer){
    let result=[]
    this.each((value,index)=>{

        let output= transformer(value,index, this)

        console.log(value,output)
        result.push(output)
    })

    return result;
}


Array.prototype.accumulate= function(callback, intialAccumulatorValue, postProcessor=(x)=>x){

    let   accumulatedValue=intialAccumulatorValue 

    this.each((value,index)=>{
        accumulatedValue = callback(accumulatedValue,value,index,this)
    });

    
    accumulatedValue=postProcessor(accumulatedValue,this);

    return accumulatedValue;

}


Array.prototype.searchAll=function(matcher){

    return this.accumulate((filteredValues, value,index)=>{
        if(matcher(value,index,this ))
            filteredValues.push(value)

        return filteredValues
    },[])
}



let values=[1,2,3,4]

let sum = values.accumulate((reccuringSum,value)=>{
   return  reccuringSum+value
},0)

console.log('sum',sum);

let multiply=values.accumulate((multiples, value)=>multiples*value,1)
console.log('multiply',multiply);



// //test function
// let numbers=[2,3,9,11,8,14,13,12,8,7,6,8,6]

// numbers.each((x,i)=>console.log(i,x))

 let names=['India','USA','UK','France','Japan']

// let nameLengths= names.transform(n=>n.length)

// console.log('nameLengths',nameLengths);

let totalCharCount= names.accumulate((len,name)=> len+name.length,0)
console.log('totalCharCount',totalCharCount);

let numbers=[2,3,9,11,8,14,13,12,8,7,6,8,6]

let distinct= numbers.reduce((distinctArray,value)=>{
    if(!distinctArray.includes(value))
        distinctArray.push(value)
    return distinctArray
},[]);


console.log('distinct',distinct);


let avg = values.accumulate((total,value)=>total+value,0, (total,arr)=>total/arr.length)
console.log('avg',avg);


let evens =  numbers.searchAll(n=>n%2===0)

console.log('evens',evens);
