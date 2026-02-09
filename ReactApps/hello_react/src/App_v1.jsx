//import style before other components
import {useState} from 'react'
import './app.css'
//so that other components can use the style
import Heading from './components/Heading'
import Footer from './components/Footer'

import HomeScreen from './components/HomeScreen'
import BookListScreen from './components/books/BookListScreen'
import BookDetailsScreen from './components/books/BookDetailsScreen'

import AuthorListScreen from './components/authors/AuthorListScreen'

const MyApp = () => {

    let [screen,navigate]=useState('/');

    let menu=[
        {label:'Home', target:'/'},
        {label:'Authors', target:'/authors'},
       // {label:'Add Author', target:'/auhors/add'},
        {label:'Books', target:'/books'},
       // {label:'Add Book', target:'/books/add'},
    ]

    

    return <div>
        <Heading title="World of Books" menu={menu} onNavigate={navigate} />
        <div className="container">
           { screen==='/' && <HomeScreen/> }
           { screen==='/books' && <BookListScreen/> }
           { screen==='/books/details' && <BookDetailsScreen/> }
           { screen==='/authors' && <AuthorListScreen/>}
        </div>
        <Footer/>
    </div>
}





export default MyApp