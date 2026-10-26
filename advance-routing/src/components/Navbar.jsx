import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex py-4 px-8 bg-cyan-800 items-center justify-between '>
      <h2 className='text-2xl font-bold'>Advance Routing</h2>
      <div className='flex gap-8'>
        {/* <a href="/" className='text-lg font-bold'>Home</a>
       <a href="/about"className='text-lg font-bold'>About</a>
       <a href="/contact" className='text-lg font-bold'>Contact</a> */}
       <Link to='/' className='text-lg font-bold'>Home</Link>
       <Link to='/about' className='text-lg font-bold'>About</Link>
       <Link to='/contact' className='text-lg font-bold'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
