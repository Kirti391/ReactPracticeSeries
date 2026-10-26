import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
      <h3>React Router DOM Navbar</h3>
      <div>
       <Link to='/'>Home Page</Link>
       <Link to='/about'>About Page</Link>
       <Link to='/contact'>Contact Page</Link>
       <Link to='/product'>Product page</Link>
      </div>
     </div>
  )
}

export default Navbar
