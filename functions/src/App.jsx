import { useState } from 'react'

import './App.css'

const App=()=> {

  function btnClicked() {
    console.log('Button clicked')
  }
function mouseEnter(){
  console.log('Mouse entered');
}

function inputChanging(val){
  console.log('user is typing', val);
}
const pageScrolling=(ele) =>{
  console.log('page scrolling....at speed',ele);
  if(ele>0){
    console.log("seedha scrolling");
  }
  else{
    console.log("ulta scrolling");
}}
  return (
    <div onWheel={(ele)=>{
       console.log(ele.deltaY)
      pageScrolling(ele.deltaY);
    }}>
    {/* // <div onWheel={pageScrolling}> */}
      {/* <h1>Hello,Guys</h1>
      <button onDoubleClick={btnClicked}>Change user</button> */}
      {/* <button onMouseEnter={mouseEnter}>Mouse Enter</button> */}
      {/* <button onClick={btnClicked}>Explore this.</button>
    <button onClick={()=>{
      console.log('Button Clicked!')
    }}>Click Here</button> */}

    {/* <input onClick={()=>{
      console.log("Input per click hua h")
    }} type="text" placeholder="Enter your name"/> */}
     
     {/* <input onChange={inputChanging} type="text" placeholder="Enter your name"/> */}

     {/* <input onChange={function(ele){
       console.log(ele.target.value)
       inputChanging(ele.target.value)
     }} type="text" placeholder="Enter your name"/> */}

       {/* <div onMouseMove={(ele)=>{
        console.log(ele.clientX)
       }} className='box'>
            
       </div> */}

       <div className='page1'></div>
       < div className='page2'></div>
       < div className='page3'></div>
       
    </div>
  )
}

export default App
