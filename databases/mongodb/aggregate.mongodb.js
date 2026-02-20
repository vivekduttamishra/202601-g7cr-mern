

//take the data from books.mongodb.js 


use('books_db')


//db.book.find()
//db.books.aggregate()

const basicInfo = { title: 1, author: 1, price: 1, _id: 0 }

//find only basic info 
//db.books.find({},basicInfo)

const getBasicInfo= ()=> db.books.aggregate([
    {
        //similar to select
        $project: basicInfo
    }
])

//find all books by author vivek

//db.books.find({author:/vivek/i}, basicInfo)

const searchBookByAuthor = author=> db.books.aggregate([
    { $project: basicInfo },

    {
        $match: {
            author: '/'+author+'/i'
        }
    }
])



//search all poetry books

const searchBookFromCategory= cat => db.books.aggregate([    

    {
        $match: {
            categories: cat
        }
    },

    { $project: basicInfo },
])



//group books by authors


const  groupByAuthor=()=>db.books.aggregate([

    //select only those books that are reviewed
    {
        $match :{
            reviews:{$exists:true}
        }
    },
    //now gorup on author
    {
        $group:{
            //group key _id 
            //assign your field by prefixing a $
            _id : "$author" ,
            //we can mention books count
            books: {$sum:1},
            author: {$first: "$author"} ,
            //average price
            avg_price: {$avg: "$price"},
            total_price: {$sum: "$price"},
            title: {$first: "$title" }
        }
    },
    //remove unwanted _id
    {
        $project:{_id:0}
    },
    //see if books count is greater than 1
    {
        $match:{ books:{ $gt: 1} }
    }

])


const unWindCategories = () => db.books.aggregate(

    {
        $match :{ title: /accursed/i}
    },

    {
        $project:{...basicInfo, categories:1}
    },

    {
        $unwind: "$categories"
    }, 

)

unWindCategories();

const groupByCategories = () => db.books.aggregate(

    // {
    //     $match :{ title: /accursed/i}
    // },

    {
        $project:{...basicInfo, categories:1}
    },

    {
        $unwind: "$categories"
    },

    {
        $group:{
            _id: "$categories",
            category: {$first: "$categories"},
            count: {$sum:1},
           //add book into the array
            books: {$push: {
                title: "$title",
                author: "$author",
                price: "$price"
            }}

        }
    },

    {$project:{_id:0}},


)

//groupByCategories();
