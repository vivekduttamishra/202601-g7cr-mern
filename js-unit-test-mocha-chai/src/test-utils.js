

export function makeSure(condition,description="failed"){
    if(!condition)
        throw new Error(description)
}

export function makeSureTheyAreEqual(expected,actual, description){
    makeSure(expected===actual, description??`Exepected ${expected}, Found:${actual}`)
        
}


export function makeSureItThrows( action, errorMessage){

    try{
        action()
    }catch(error){
        if(error.message===errorMessage)
            return error; //not throw

        //another error was thrown
        throw new Error(`UnExpected error thrown:${error.message}`)
    }
    //no error was thrown
    throw new Error(`Expected Error was not thrown: '${errorMessage}'`)

}