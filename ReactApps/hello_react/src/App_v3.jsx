//import style before other components
import { useState } from 'react'
import './app.css'
//so that other components can use the style
import Heading from './components/Heading'
import Footer from './components/Footer'

import HomeScreen from './components/HomeScreen'
import BookListScreen from './components/books/BookListScreen'
import BookDetailsScreen from './components/books/BookDetailsScreen'
import If from './components/utils/If'
import AuthorListScreen from './components/authors/AuthorListScreen'
import AuthorDetailsScreen from './components/authors/AuthorDetailsScreen'
import faqs from './data/faq'
import _books from './data/books.json'
import ScreenManager from './components/utils/ScreenManager'


const MyApp = () => {

    let [screen, navigate] = useState('/');
    let [books,setBooks]=useState(_books);
    let [selectedBook,selectBook]=useState(null)

    // Why do we need this? Why not directly navigate to details screen with book info?
    // const selectBookFn=book=>{
    //     selectBook(book)
    // }

    const handleBookSelect= book=>{
        selectBook(book)
        navigate('/books/details')
    }

    // let menu = [
    //     { label: 'Home', target: '/' },
    //     { label: 'Authors', target: '/authors' },
    //     // {label:'Add Author', target:'/auhors/add'},
    //     { label: 'Books', target: '/books' },
    //     // {label:'Add Book', target:'/books/add'},
    // ]

    let screens={
        '/': {label:'Home', factory: ()=><HomeScreen faqs={faqs}/>},
        '/books': {label:'Books', factory:()=><BookListScreen books={books}  onBookSelect={handleBookSelect}/>},
        '/books/details': {label:'Book Details', factory:() =><BookDetailsScreen selectedBook={selectedBook} onBack={()=>navigate('/books')}/>},
        '/authors': {label:'Authors', factory:()=><AuthorListScreen visible={true} /> },
        '/authors/details': {label:'Author Details', factory:()=><AuthorDetailsScreen/>}
    }



    return <div>
        <Heading title="World of Books" menu={screens} onNavigate={navigate} />
        <div className="container">
            <ScreenManager screens={screens} selectedScreen={screen} />
        </div>


        {/* <If condition={screen === '/'} element={<HomeScreen />} />
            <If condition={screen === '/books'}>
                <BookListScreen />
            </If>
            {screen === '/books/details' && <BookDetailsScreen />}
            {screen === '/authors' && <AuthorListScreen />} */}
        <Footer />
    </div>
}





export default MyApp