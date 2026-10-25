import { useState } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  // Fetch method for api calling

  async function getData(){
    console.log('Data aa gya');
   const response=await fetch("https://factfacts.com/api.php")
   console.log(response)
   console.log(response.json)
   const data=await response.json();
   console.log(data);
  }  
  
  
  const [data, setData]=useState([])
  // using axios for api calling

  const getData2=async()=>{
    const response=await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response);
    console.log(response.data)
    //destructuring
    const {data}=await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(data)

    setData(response.data);

  }


  return (

    <div>
      <button onClick={getData }>Get Data</button>
      <button onClick={getData2 }>Get Data2</button>
      <div>
        {data.map(function(ele, idx){
              return <h3 key={idx}>Hello {idx}, {ele.name}</h3>
        })}
      </div>
    </div>

  )
}

export default App
