import { useState } from 'react'
import './App.css'

const App = () => {
  const submitHandler = (e)=>{
      e.preventDefault();
        console.log("Form Submitted")
    }
  return (
    <div>

    <form onSubmit={(e)=>{
    
      submitHandler(e);
    }}>
      <input type="text" placeholder="Enter your name" />
      <input type="email" placeholder="Enter your email" />
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default App
