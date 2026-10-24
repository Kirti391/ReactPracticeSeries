import { useState } from 'react'
// import './App.css'
import './index.css'
const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  }

  return (
    <div className=" h-screen bg-black text-white lg:flex">
      <form action="" className="flex  lg:w-1/2 items-start flex-col gap-5 p-10" onSubmit={submitHandler}>
        {/* <div className="flex w-1/2 items-start px-30 py-20"> */}
        <input
          type="text"
          className="px-5 py-2 w-full border-2 font-medium rounded outline-none"
          placeholder='Enter notes heading...'
        />
        <textarea
          placeholder='Enter details...'
          type="text"
          className="px-5 py-2 w-full h-30 outline-none font-medium border-2 rounded"
        ></textarea>
        <button className="px-5 font-medium py-2 w-full outline-none bg-white text-black rounded">Add Notes</button>
        {/* </div> */}
        {/* <img src="https://www.pngmart.com/files/23/Note-Paper-PNG-Pic.png" alt="notes image" className="h-70 pr-35"  /> */}


      </form>
      <div className="p-10 border-l-2 lg:w-1/2">
        <h1 className='text-3xl font-bold pb-5'>Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 h-full  overflow-auto">
          <div className='h-52 w-40 bg-white rounded-2xl'></div>
          <div className='h-52 w-40 bg-white rounded-2xl'></div>
          <div className='h-52 w-40 bg-white rounded-2xl'></div>
        </div>
      </div>
    </div>
  )
}

export default App
