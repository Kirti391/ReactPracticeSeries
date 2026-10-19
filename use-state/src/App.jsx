import { useState } from "react";
import './App.css'
const App = () => {

  // const [num, setNum] = useState(10);
  // const [username, setUsername]=useState("Kirti");
  // const [users,setUsers]=useState([10,20,30]);
//  let a=20;
  // function changeA(){
  //   console.log(a);
  //      a=30;
  //      console.log(a);
  // }

  // function changeNum(){
  //   setNum(30);
  //   setUsername("Kirti Jainwar");
  //   setUsers([30,40,50]);
  // }
  const [number, setNumber]=useState(10);
  const btnClicked=() => {
    console.log(number);
    setNumber(30);
    console.log(number);
  }
const [num, setNum]=useState(0);
  function increaseNum(){
     setNum(num+1);
     console.log("increasing");
  }
  function decreaseNum(){
    setNum(num-1);
    console.log("decreasing");
  }
  function jump5Num(){
    setNum(num+5);
    console.log("increase by 5");
  }

  const [str, setStr]=useState({user:'Kirti', age:21});
  function changeStr(){
// console.log(str.user);
// console.log(str.age);
// const newStr={...str};
// newStr.user="Kuldeep";
// setStr(newStr);
 setStr(prev=>({...prev, user:"Kuldeep"}));

  }

  const [nums, setNums]=useState([10,20,30]);
  function changeNums(){
    // const newNums=[...nums];
    // newNums.push(99);
    // setNums(newNums);
    setNums(prev=>([...prev, 99]));

  
  }

  // Batch updates: React batches state updates for performance reasons. When you call setState multiple times in a single event handler, React will batch those updates together and only re-render the component once. This can lead to unexpected behavior if you're relying on the previous state value to calculate the next state.
  const [n, setN]=useState(10);
  const handleClick=()=>{
    // setN(n+1);
    // setN(n+1);
    // setN(n+1);
    setN(prev=>prev+1);
    setN(prev=>prev+1);
    setN(prev=>prev+1); 
    console.log(n);
  }
  return (
    <div>
      {/* <h1>Value of num is {num} <br/> Value of the username is {username} <br/>{users}</h1> */}
      {/* <button onClick={changeA}>Click</button> */}
      {/* <button onClick={changeNum}>Click </button> */}
<h1>{num}</h1>
<button onClick={btnClicked}>Click</button>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jump5Num}>Increase by 5</button>

      <h2>{str.user},{str.age}</h2>
      <button onClick={changeStr}>Change</button>
      <h3>{nums}</h3>
      <button onClick={changeNums}>Change Array</button>
      <p>{n}</p>
      <button onClick={handleClick}>Batch Updates</button>
    </div>
  )
}

export default App
