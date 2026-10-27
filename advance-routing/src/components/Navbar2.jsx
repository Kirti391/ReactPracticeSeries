import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar2 = () => {
     const navigate= useNavigate();
  return (
    <div className='py-2 px-5 bg-cyan-700'>
        <button onClick={()=>{
          navigate('/')
        }} className='bg-amber-500 px-5 py-2 font-medium rounded m-2 cursor-pointer active:scale-96'>Return to Home Page</button>
      <button onClick={()=>{
        navigate(-1)
      }} className='bg-amber-500 px-5 py-2 font-medium rounded m-2 cursor-pointer active:scale-96'>Back</button>
         <button onClick={()=>{
        navigate(+1)
      }} className='bg-amber-500 px-5 py-2 font-medium rounded m-2 cursor-pointer active:scale-96'>Next</button>
    </div>
  )
}

export default Navbar2
