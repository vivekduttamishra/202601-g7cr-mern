

use('books_db')

//db.books.drop();

function addBooks() {
   return  db.books.insertMany([
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
            variants:[
                { isbn:"1234", format:"paperback", price:399},
                { isbn:"5555", format:"ebook", price:99},
            ]
        },
        {
            title: "Rashmirathi",
            price: 99,
            author: "Ramdhari Singh 'Dinkar'",
            categories: ["hindi", "epic", "poetry", "mahabharata"],
            variants:[
                { isbn:"3333", format:"paperback", price:399},
                { isbn:"4444", format:"ebook", price:99},
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
            variants:[
                { isbn:"7777", format:"paperback", price:399},
                { isbn:"9999", format:"ebook", price:99},
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

//addBooks(); //create the books

//find all books.
function findAndPrintBookTitle(){
   

    const results = db.books.find({ })

    for(let result of results)
        console.log(result.title)
}

//select all books
//db.books.find()


//select books by author 'Vivek Dutta Mishra'