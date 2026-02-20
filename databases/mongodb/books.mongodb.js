

use('books_db')

//db.books.drop();

function addBooks() {
    return db.books.insertMany([
        {
            title: "The Accursed God",
            price: 299,
            author: "Vivek Dutta Mishra",
            categories: ["indian", "epic", "fiction", "english", "mahabharata"],
            series: 'The Lost Epic',
            seriesIndex: 1,
            reviews: [
                { reviewer: "Sanjay", rating: 4 },
                { reviewer: "Prabhat", rating: 3 },
                { reviewer: "Sanjana", rating: 5 },
                { reviewer: "Sunil", rating: 5 },
            ],
            variants: [
                { isbn: "1234", format: "paperback", price: 399 },
                { isbn: "5555", format: "ebook", price: 99 },
            ]
        },
        {
            title: "Rashmirathi",
            price: 99,
            author: "Ramdhari Singh 'Dinkar'",
            categories: ["hindi", "epic", "poetry", "mahabharata"],
            variants: [
                { isbn: "3333", format: "paperback", price: 399 },
                { isbn: "4444", format: "ebook", price: 99 },
            ]
        },
        {
            title: "The Shadows of Kali",
            price: 399,
            author: "Vivek Dutta Mishra",
            categories: ["indian", "epic", "fiction", "english"],
            series: 'The Lost Epic',
            seriesIndex: 2,
            reviews: [
                { reviewer: "Sanjay", rating: 4 },
                { reviewer: "Shivanshi", rating: 4 },
                { reviewer: "Aman", rating: 5 },
                { reviewer: "Naman", rating: 5 },
            ],
            variants: [
                { isbn: "7777", format: "paperback", price: 399 },
                { isbn: "9999", format: "ebook", price: 99 },
            ]
        },
        {
            title: "Manas",
            price: 299,
            author: "Vivek Dutta Mishra",
            categories: ["hindi", "poetry", "mahabharata"]
        },
        {
            title: "The Count of Monte Cristo",
            price: 399,
            author: "Alexandre Dumas",
            categories: ["french", "classic", "history", "fiction"]
        },
    ])
}

function addMoreBooks() {
    return db.books.insertMany([
        {
            title: "Harry Potter and the Half Blood Prince",
            price: 599,
            author: "JK Rowling",
            categories: ['fantasy', "fiction", "english"],
            series: 'Harry Poter',
            seriesIndex: 6,
            reviews: [
                { reviewer: "Sanjay", rating: 4 },
                { reviewer: "Somesh", rating: 4 },
                { reviewer: "Sanjeev", rating: 5 },
                { reviewer: "Sunil", rating: 5 },
            ],
            variants: [
                { isbn: "5678", format: "paperback", price: 399 },
                { isbn: "2292", format: "ebook", price: 99 },
            ]
        },
        {
            title: "Harry Potter and the philosopher's Stone",
            price: 599,
            author: "JK Rowling",
            categories: ['fantasy', "fiction", "english"],
            series: 'Harry Potter',
            seriesIndex: 1,
            reviews: [
                { reviewer: "Sanjay", rating: 4 },
                { reviewer: "Somesh", rating: 4 },
                { reviewer: "Sanjeev", rating: 5 },
                { reviewer: "Sunil", rating: 5 },
            ],
            variants: [
                { isbn: "5678", format: "paperback", price: 399 },
                { isbn: "2292", format: "ebook", price: 99 },
            ]
        },
        {
            title: "A Study in Scarlet",
            price: 599,
            author: "Conan Doyle",
            categories: ['mystry', 'suspense', "fiction", "english"],
            series: 'Sherlock Holmes',
            seriesIndex: 1,
            reviews: [
                { reviewer: "Manoj", rating: 4 },
                { reviewer: "Mahesh", rating: 4 },
                { reviewer: "Sanjeev", rating: 5 },
                { reviewer: "Sunil", rating: 5 },
            ],
            variants: [
                { isbn: "2233", format: "paperback", price: 399 },
            ]
        },
    ])
}



//addBooks(); //create the books

//addMoreBooks();

//find all books.
function findAndPrintBookTitle() {


    const results = db.books.find({})

    for (let result of results)
        console.log(result.title)
}

//select all books
//db.books.find()


//select books by author 'Vivek Dutta Mishra'
// db.books.find({
//     author: 'Vivek Dutta Mishra'
// })

//select only title, author, price
// db.books.find({
//     //which documents
// },{
//     //which fields

//     title:1,  //1 -->true
//     author:1,
//     price:1,
//    //since title is shown
//    //others are automatically hidden
//    //except _id taht must be manually hidden
//     _id:0,   //0 -->false 
// })


//use of JS variables
const basicInfo = { _id: 0, title: 1, author: 1, price: 1 }


//find all books by vivek basic info
//db.books.find({author:'Vivek Dutta Mishra'}, basicInfo)

//find all books by partial name. Remember it is full match and case sensetive
//db.books.find({author:'Vivek'}, basicInfo) //no result

//You can use regular expression

//db.books.find({author:/Vivek/}, basicInfo)


//default find is case insenstive
//db.books.find({author:/vivek/}, basicInfo) //no result


//case insenstive earch
//db.books.find({ author: /vivek/i}, basicInfo) 


//find books with price under 300
// db.books.find({

//     price: {$lt : 300}  // price<300

// },basicInfo)


//find all independent books that are not part of a series

// db.books.find({
//     series: null  //either value is null or key is null
// },{
//     ...basicInfo, series:1
// })


//find all books that are part of some series 
// but not the first part
// db.books.find({

//     series: { $exists: true },
//     seriesIndex: {$ne:1}
    
// },
// {
//         ...basicInfo,
//         series: true,
//         seriesIndex:true

// })


//find all poetry books.

db.books.find({

    categories: 'poetry'

},{
    ...basicInfo, categories:true
})


