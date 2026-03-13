import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './index.css'
import App from './App.jsx'
import { AuthorContext } from './context/AuthorContext'
import { UserContext } from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(

  <Router>
    <UserContext>
      <AuthorContext>
        <App />
      </AuthorContext>
    </UserContext>
  </Router>

)
