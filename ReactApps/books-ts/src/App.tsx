import './App.css'
import BookDetailsScreen from './components/books/BookDetailsScreen';
import BookListScreen from './components/books/BookListScreen';
import BookManagementScreen from './components/books/BookManagementScreen'
import Header from './components/Header'
import UserLoginScreen from './components/users/UserLoginScreen';
import NotFoundScreen from './components/utils/NotFoundScreen';
import { useUserProvider } from './providers/UserProvider';
import type { NavParameter } from './types/NavParameter'
import {Routes,Route} from 'react-router-dom';




function App() {

  const {logout} = useUserProvider();
  
  const mainMenu:NavParameter[]=[
    {
      text:"Home",
      onClick:"/"
    },
    {
      text:"Books",
      onClick:"/books"
    },
    {
      text:"Authors",
      onClick:"/authors"
    },
    {
      text:"Login",
      linkVisibility:"unauthenticated",
      onClick:"/user/login"
    },
    {
      text:"Register",
      linkVisibility:"unauthenticated",
      onClick:"/user/register"
    },
    // {
    //   text:"Register",
      
    // },
    {
      text:"Logout",
      linkVisibility:"authenticated",
      onClick:logout
    },
  ]
  return (
    <div className='App'>
      <Header title="World of Books" nav={mainMenu }/>
      <Routes>
        <Route path='/' element={<h2>Home Screen</h2>} />
        <Route path='/books' element={<BookListScreen/>} />
        <Route path='/books/add' element={<h2>Book Add Screen</h2>} />
        <Route path='/books/:id' element={<BookDetailsScreen/>} />

        <Route path='/user/login' element={<UserLoginScreen/>} />
        <Route path='/user/register' element={<h2>User Registration</h2>} />


        <Route path='*' element={<NotFoundScreen/>} />

        

      </Routes>
      
    </div>
  )
}

export default App
