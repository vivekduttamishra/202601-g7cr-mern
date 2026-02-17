import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { UserProvider } from './providers/UserProvider.tsx'

createRoot(document.getElementById('root')!).render(

  <UserProvider>
    <Router>
      <App />
    </Router>
  </UserProvider>
)
