import { useState } from 'react'
import Header from './components/Header'
import BookListScreen from './components/books/BookListScreen'
import HomeScreen from './components/HomeScreen'
import BookDetailsScreen from './components/books/BookDetailsScreen'
import BookManager from './components/books/BookManager'
import './App.css'

function App() {

  const[screen,setScreen]=useState('/')
  let paths=window.location.pathname.split('/')
  console.log('paths',paths)
  const path= '/'+paths[1]
  console.log('path',path);


  return (
   <div>
      <Header/>
      <div className="screen">
        <BookListScreen 
            visible={path==='/books'} 
        />
        <HomeScreen visible={path==='/'} />
        <BookDetailsScreen visible={path==='/bookdetails'} />
        <BookManager visible={path==='/bookmanager'} />
      </div>
   </div>
  )
}

export default App
