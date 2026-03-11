import { useState } from 'react'


import { Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import BookListScreen from './components/books/BookListScreen'
import HomeScreen from './components/HomeScreen'
import BookDetailsScreen from './components/books/BookDetailsScreen'
import AuthorListScreen from './components/authors/AuthorListScreen'
import AuthorDetailsScreen from './components/authors/AuthorDetailsScreen'
import AuthorAddScreen from './components/authors/AuthorAddScreen'
import BookManager from './components/books/BookManager'

import NotFoundScreen from './components/utils/NotFoundScreen'
import BookAddScreen from './components/books/BookAddScreen'
import Login from './components/users/Login'
import Register from './components/users/Register'



function App() {


  return (
   <div>
      <Header/>
      <div className="screen">

        
          <Routes>
            <Route path="/" element={<HomeScreen/>} />
            <Route path="/books" element={<BookListScreen/>} />
            <Route path="/books/add" element={<BookAddScreen/>} />
            <Route path="/books/:id" element = {<BookDetailsScreen/>} />
            <Route path="/bookmanager" element={<BookManager/>} />
            <Route path="/authors" element={<AuthorListScreen/>} />
            <Route path="/authors/add" element={<AuthorAddScreen/>} />
            <Route path="/authors/:id" element={<AuthorDetailsScreen/>} />
           
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />

            <Route path="*" element={<NotFoundScreen/>} />
        
          </Routes>
        
        
  
      
      </div>
   </div>
  )
}

export default App
