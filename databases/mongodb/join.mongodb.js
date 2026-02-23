

use('booksdb')


const getBooksWithAuthor=()=>db.books.aggregate(

    {
        $lookup:{
            from: 'authors',
            localField:'authorId',  //books.authorId,
            foreignField: 'id',  //authors.id
            as:'author',  //will be returned as an array
        }
    },

    {
        $unwind: "$author"
    },

    {
        $project:{
            _id:false,
            id:true,
            title:true,
            description:true,
            // authorId:true,
            // authorName: "$author.name",
            // aboutAuthor: "$author.bio"
            author:{
                id:true,
                name:true,
                bio:true
            }            
        }
    }

    

)



//getBooksWithAuthor();


const getAuthorsWithBooks=()=> db.authors.aggregate(
    {
        $lookup:{
            from:'books',
            localField: 'id', //author.id
            foreignField:'authorId', //book.authorId
            as:'books'
        }
    },
    {
        $project:{
            _id:0,
            name:true,
            bookCount: {$size: "$books"},
            books:{
                title:true
            }
        }
    },
    {
        $sort:{
            bookCount:-1
        }
    }

)

getAuthorsWithBooks()