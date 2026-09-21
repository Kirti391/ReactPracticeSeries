import React from 'react'
import './App.css'
import {Bookmark} from 'lucide-react'

const App = () => {
  return (
    <div className="parent">
      <div className="card">
         <div className="top">
          <img src="https://w7.pngwing.com/pngs/575/959/png-transparent-amazon-icon-hd-logo.png" alt="Image"/>
          <button>Save<Bookmark size={13}/></button>
         </div>
         <div className="center">
          <h3>Amazon<span>
            5 days ago
          </span></h3>
          <h2 className='tag'>Senior UI/UX Designer</h2>
          <div>
            <h4>Part-Time</h4>
            <h4>Senior Level</h4>
          </div>
          
         </div>
         <div className="bottom">
          <div>
            <h3>$120/hr</h3>
            <p>Mumbai,India</p>
          </div>
          <button>Apply now</button>
         </div>

      </div>
      
    </div>
  )
}

export default App
