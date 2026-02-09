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


const MyApp = () => {

    let [screen, navigate] = useState('/books');
    let [books,setBooks]=useState(_books);
    let [selectedBook,selectBook]=useState(null)

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
        '/': ()=><HomeScreen faqs={faqs}/>,
        '/books': ()=><BookListScreen books={books} faqs={faqs} onBookSelect={handleBookSelect}/>,
        '/books/details': () =><BookDetailsScreen selectedBook={selectedBook} onBack={()=>navigate('/books')}/>,
        '/authors': ()=><AuthorListScreen /> ,
        '/authors/details': ()=><AuthorDetailsScreen/>
    }



    return <div>
        <Heading title="World of Books" menu={menu} onNavigate={navigate} />
        <div className="container">

            <HomeScreen faqs={faqs} visible={screen==='/'} />
            <BookListScreen visible={screen==='/books'} />
            <BookDetailsScreen visible={screen==='/books/details'} />
            <AuthorListScreen visible={screen==='/authors'} />
            <AuthorDetailsScreen visible={screen==='/authors/details'} />
            
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