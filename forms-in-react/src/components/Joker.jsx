import React, { useEffect } from 'react'
import { useState } from 'react';

const Joker = () => {
    
const URL="https://official-joke-api.appspot.com/random_joke"

const [joke, setJoke]=useState({});
const getNewJoke=async () =>{
    let response= await fetch(URL);
    let jsonResponse=await response.json();
    console.log(jsonResponse);
    setJoke({setup:jsonResponse.setup, punchline:jsonResponse.punchline})
    // return jsonResponse;
    
}
useEffect(()=>{
    async ()=>{  let response= await fetch(URL);
    let jsonResponse=await response.json();
    console.log(jsonResponse);
    setJoke({setup:jsonResponse.setup, punchline:jsonResponse.punchline}) }
    
    // return jsonResponse;

},[])
  return (
    <div>
      
      <h3>Joker!</h3>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getNewJoke}>New Joke</button>
    </div>
  )
}

export default Joker
