
interface Oid{
    $oid:string
}
export interface Review{
    title:string,
    body:string,
    rating:number,
    reviewer:string,
    bookId:string,

}
export interface Book{
    title:string,
    id:string,
    author:string,
    price:number,
    isbn:string| string[],
    rating:number|string,
    cover:string,
    description:string,

    //optional elements
    _id?: Oid,
    pages?:number|string,
    votes?:number|string,
    tags?: string[],
    series?:string,
    seriesIndex?:string,
    reviews?: Review[]    
}