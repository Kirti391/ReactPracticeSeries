import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  // function random(){
  //   console.log("Hello");
  // }
  // random()

  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(100);
  useEffect(function () {
    console.log("useEffect is runningg.....");

  }, [num])

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function changeA() {
    console.log("the value of a is changing");
  }
  function changeB() {
    console.log("the value of b is changing");
  }
  useEffect(function(){
    // console.log("use effect is running....");
     changeA();
  },[b])
   useEffect(function(){
    // console.log("use effect is running....");
     changeB();
  },[a])
  return (
    <div>
      <h1>The value of num is {num}</h1>
      <h1>The value of num2 is {num2}</h1>
      <button
        onMouseEnter={() => {
          setNum(num + 1);
        }}
        onMouseLeave={() => {
          setNum2(num2 + 10);
        }}
      >Hover</button>

      <br />
      <hr />

      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={() => {
        setA(a + 10);
      }}  >
        Change A
      </button>
      <button onClick={()=>{
        setB(b+a);
      }}
      >Change B</button>

    </div>
  )
}

export default App
