//import style before other components
import './app.css'
//so that other components can use the style
import Heading from './components/Heading'
import Footer from './components/Footer'

import HomeScreen from './components/HomeScreen'
import BookManager from './components/BookManager'

const MyApp = () => {

    let menu=[
        {label:'Home', target:'/'},
        {label:'Authors', target:'/auhors'},
        {label:'Add Author', target:'/auhors/add'},
        {label:'Books', target:'/books'},
        {label:'Add Book', target:'/books/add'},
    ]

    return <div>
        <Heading title="World of Books" menu={menu} />
        <div className="container">
            <BookManager/>
        </div>
        <Footer/>
    </div>
}





export default MyApp