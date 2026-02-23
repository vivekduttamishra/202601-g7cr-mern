
use ('booksdb')


const getAuthors=()=> db.authors.aggregate(
  //pipeline where we can add multiple operations

  //each object represents one operation
  {
    //each operation will have an operator
    $limit:2
  },

  //let's pick what we need
  {
    $project:{
      _id:false,
      name:true,
      bio:true
      
    }
  }
)


//getAuthors();


const getTopBooks=()=>db.books.aggregate(
  {
    $project:{
      _id:0,
      title:true,
      rating:true
    }
  },  
  {
    $sort: {
      rating: -1 //descending sort
    }
  },
  {
    $limit:5
  },
)

//getTopBooks()

const getTop5ReviewedBooks=()=>db.books.aggregate(
  {
    $set:{
      rating: {$avg:"$reviews.rating"},      
      votes: {$size: "$reviews"},
    }
  },

 {
    $set:{
      rating: {$round: ["$rating",2]}
    } 
 },

  {
    $project:{
      _id:0,
      title:true,
      rating:true,
      rrating:true,
      votes:true
    }
  },

  {
    $sort:{
      //primary sort key
      rating: -1,
      //secondary sort key
      votes: -1,
    }
  }


  

);

getTop5ReviewedBooks()

//db.books.find();