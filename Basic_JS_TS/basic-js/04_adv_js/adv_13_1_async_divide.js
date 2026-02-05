

async function divide( x, y){
    //async-> returns a promise
    if(y===0)
        throw new Error(`Divide by Zero`) //same as reject error

    return x/y ;  //same as resolve (x/y)
}

const testDivideAsync = async (x,y)=>{

    let result = await divide(x,y) //will wait for result

    //what you would typically write inside a then callback
    console.log(`${x}/${y}=${result}`)

    //assuming we dont expect an error

}

testDivideAsync(4,3)
testDivideAsync(8,3)