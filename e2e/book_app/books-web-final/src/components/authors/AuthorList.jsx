

export const AuthorCard = ({ author, defaultPhoto = '/unknown-author-sm.png' }) => {
    if (!author)
        return ""

    const style = { width: "18rem;" }
    console.log('author.photo', author.photo);


    return (<div class="card col col-3" style={style}>
        <img src={author.photo ?? defaultPhoto} className="card-img-top author-thumbnail" alt={author.name} />
        <div class="card-body">
            <p class="card-text">{author.name}</p>
        </div>
    </div>)
}

export const AuthorList = ({ authors = [] }) => {

    return (
        <div className='row'>
            {
                authors.map(author => (
                    <AuthorCard key={author.id} author={{...author, photo:null}} />
                ))
            }
        </div>
    )

}

export default AuthorList