use('g7_2026')


const updateAuthorPhotos = () => {
    db.authors.find().forEach((author) => {
        const photoUrl = `${author._id}.jpg`;
        db.authors.updateOne(
            { _id: author._id },
            { $set: { photoUrl: photoUrl } }
        );
    });
}

//updateAuthorPhotos();

//db.authors.find({},{_id:1, photoUrl:1})


const updateAuthorId = () => {
    const change = [
        { old: 'r.k.-narayan', _new: 'r-k-narayan' },
        { old: 'a.p.j.-abdul-kalam', new: 'a-p-j-abdul-kalam' },
    ]

    change.forEach(c => {
        try {

            let doc = db.authors.findOne({ _id: c.old })
            let { _id, ...newDoc } = doc
            db.authors.insertOne({
                _id: c._new,
                ...newDoc
            })
            db.authors.findOneAndDelete({ _id: c.old })
        } catch (err) {
            console.log(err.message)
        }
    })
}

//updateAuthorId();

//db.authors.find()


const insertJKR(){
    try{
        const author = {
            "_id": "j-k-rowling",
            "name": "J.K. Rowling",
            "biography": "British author and philanthropist, best known for the seven-volume Harry Potter fantasy series and her ongoing Cormoran Strike crime fiction novels written under the pseudonym Robert Galbraith. Her work explores themes of death, the divide between good and evil, and the complexities of power and authority.",
            "tags": [
                "fantasy",
                "mystery",
                "coming-of-age",
                "crime-fiction",
                "philanthropy"
            ],
            "social": {
                "twitter": "https://x.com/jk_rowling",
                "website": "https://jkrowling.com",
                "facebook": "https://www.facebook.com"
            },
            "photo": "j-k-rowling.jpg"
        }

        return db.authors.insertOne(author)
    }catch(err){
        console.log(err)
    }
}

insertJKR()