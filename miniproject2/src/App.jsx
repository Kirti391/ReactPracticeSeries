import React from 'react'
import './App.css'
import User from './components/User'
import Card from "./components/Card"

const App = () => {
  const arr = [
    { user: "Kirti" ,
      age:21
    },
    { user: "Annu" , age:23},
    { user: "Bob", age:17 }
  ];

  console.log(arr);
  arr.forEach(function (el) {
    console.log(el.age);
  })
  return (
    <div className="parent">
      {/* <User name={arr[0]}/>
      <User name={arr[1]}/>
      <User name={arr[2]}/> */}

      {/* short way to write this instead of writing like above using map method */}
      {arr.map(function (ele) {
        return <Card/>;
      })}




      {/* 
       <Card/>
        <Card/> */}

    </div>
  )
}

export default App
