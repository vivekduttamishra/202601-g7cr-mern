import { useState } from 'react'


import Header from './components/Header'
import BookListScreen from './components/books/BookListScreen'
import HomeScreen from './components/HomeScreen'
import BookDetailsScreen from './components/books/BookDetailsScreen'
import AuthorListScreen from './components/authors/AuthorListScreen'
import AuthorDetailsScreen from './components/authors/AuthorDetailsScreen'
import BookManager from './components/books/BookManager'
import './App.css'

import { Routes, Route } from 'react-router-dom'
import NotFoundScreen from './components/utils/NotFoundScreen'
import BookAddScreen from './components/books/BookAddScreen'
function App() {


  return (
   <div>
      <Header/>
      <div className="screen">

        
          <Routes>
            <Route path="/" element={<HomeScreen/>} />
            <Route path="/books" element={<BookListScreen/>} />
            <Route path="/books/add" element={<BookAddScreen/>} />
            <Route path="/books/:isbn" element = {<BookDetailsScreen/>} />
            <Route path="/bookmanager" element={<BookManager/>} />
            <Route path="/authors" element={<AuthorListScreen/>} />
            <Route path="/authors/:id" element={<AuthorDetailsScreen/>} />
           
            <Route path="*" element={<NotFoundScreen/>} />
        
          </Routes>
        
        
  
      
      </div>
   </div>
  )
}

export default App
