

type Matcher<E> = (value:E)=>boolean


export function search<E>( array:Array<E>, matcher:Matcher<E>){

    let result=[]
    for(let value of array){
        if(matcher(value)){
            result.push(value)
        }
    }

    return result

}