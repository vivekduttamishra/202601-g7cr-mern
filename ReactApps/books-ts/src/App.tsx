import './App.css'
import Header from './components/Header'
import type { NavParameter } from './types/NavParameter'

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
    onClick:"/login"
  },
  // {
  //   text:"Register",
    
  // },
  {
    text:"Logout",
    onClick: ()=>console.log('Loggin Out')
  },
]


function App() {
 
  return (
    <div className='App'>
      <Header title="World of Books" nav={mainMenu }/>
    </div>
  )
}

export default App
