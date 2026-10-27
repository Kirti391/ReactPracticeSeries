import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'

const App=()=> {
  
  const [theme, setTheme]=useState('light')

  return (
   <div>
    <h1>Theme is {theme} </h1>

    <Navbar theme={theme} setTheme={setTheme}/>
   </div>
  )
}

export default App
