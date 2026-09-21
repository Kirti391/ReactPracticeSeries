import React from 'react'
import "../App.css"

import {Bookmark} from 'lucide-react'
const Card = () => {
  return (
    <div>
        <div className="card">
        <div>
          <div className="top">
          <img src="https://w7.pngwing.com/pngs/575/959/png-transparent-amazon-icon-hd-logo.png" alt="Image"/>
          <button>Save<Bookmark size={13} color="#b2a9a9"/></button>
         </div>
         <div className="center">
          <h3>Amazon<span>
            5 days ago
          </span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div className='tag'>
            <h4>Part-Time</h4>
            <h4>Senior Level</h4>
          </div>
          
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

export default Card
