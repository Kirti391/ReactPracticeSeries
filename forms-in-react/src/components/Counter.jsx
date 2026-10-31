import React from 'react'
import { useState, useEffect } from 'react';
const Counter = () => {
  let [countX, setCountX]=useState(0);
  let [countY, setCountY]=useState(0);

  let incCountX=()=>{
    console.log("Count is increased by 1");
    setCountX(countX+1);
  }
  let incCountY=()=>{
    console.log("Count is increased by 2");
    setCountY(countY+1);
  }

  useEffect(()=>{
    console.log("use-effect is running.......");
  },[countX])
  return (
    <div>
      <h1>Count X={countX}</h1>
      <button onClick={incCountX}>+1(x)</button>
       <h1>Count Y={countY}</h1>
      <button onClick={incCountY}>+2(y)</button>
    </div>
  )
}

export default Counter
