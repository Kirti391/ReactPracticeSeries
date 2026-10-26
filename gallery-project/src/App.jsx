import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Card from './components/Card'
const App = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  async function getData() {
    console.log("data aa gya");
    // axios.post('https://picsum.photos/v2/list?page=2&limit=100',{username:'Kirti',password:'Kirti@!23'})
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`);
    console.log(response);
    setUserData(response.data);
  }

  useEffect(function () {
    getData()
  }, [index])
  let printUserData = <h3 className='text-gray-300 text-xs py-2 absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 font-semibold'>Loading...</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (ele, idx) {

      return <div key={idx}>
        <Card ele={ele}/>
      </div>
    })
  }

  return (
    <div className='bg-black text-white p-4 h-screen overflow-auto'>
      {/* <button className='bg-green-600  active:scale-95 mb-7 px-5 py-2 rounded text-white ' onClick={
        getData
      }>Get data</button> */}
      {/* <h1 className='fixed text-6xl bg-red-500'>{index}</h1> */}

      <div className='flex flex-wrap gap-4 h-[82%]'>
        {
          printUserData
        }
      </div>
      <div className='flex justify-center items-center gap-6 p-4'>
        <button 
            style={{opacity:index ==1 ? 0.5: 1}}
        className='bg-amber-400 text-black cursor-pointer active:scale-95 rounded semi-bold px-4 py-2'
         onClick={()=>{
          console.log('prev btn clicked');
            if(index>1){
          setIndex(index-1)
        setUserData([])}
          // printUserData='Loading...'
          

         }}
         >Prev</button>
         <h4>Page {index}</h4>
        <button 
        className='bg-amber-400 text-black cursor-pointer active:scale-95 rounded semi-bold px-4 py-2'
        onClick={()=>{
          console.log('next btn clicked');
          setUserData([])
          setIndex(index+1)
          // printUserData='Loading...'
          
        }}
        >Next</button>
      </div>

    </div>
  )
}

export default App
