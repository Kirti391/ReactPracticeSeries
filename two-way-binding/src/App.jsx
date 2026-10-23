import { useState } from 'react'
import './App.css'

const App = () => {
  const [title, setTitle]=useState('');
  
  const submitHandler = (e)=>{
      e.preventDefault();
        console.log("Form Submitted by", title)
        setTitle('');
    }
  return (
    <div>

    <form onSubmit={(e)=>{
    
      submitHandler(e);
    }}>
      <input type="text" 
      placeholder="Enter your name" 
      value={title}
      onChange={(e)=>{
        console.log("you entered ",e.target.value)
        setTitle(e.target.value);
      }}
      />
      {/* <input type="email" placeholder="Enter your email" /> */}
       
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default App
