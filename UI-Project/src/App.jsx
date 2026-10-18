import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import './index.css'
const App = () => {

  const users=[
    {
      img:"https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      intro:'',
      tag:"Satisfied",
      color:'blue'
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      intro:'',
      tag:'UnderServed',
      color:'lightseagreen'
    },
    {
      img:"https://media.istockphoto.com/id/2196870531/photo/making-decision-on-the-move.webp?a=1&b=1&s=612x612&w=0&k=20&c=rzFeaIUuiSoIUr2ihFB2qv26Fl3V3VkIMgygTSBbBo0=",
      intro:'',
     color:'#381932',
      tag:'UnderBanked',
      
    },
     {
      img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      intro:'',
      tag:'Satisfied',
      color:'#fe6422'
    },
     {
      img:"https://images.unsplash.com/photo-1587614298171-a223667e51c2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      intro:'',
      tag:'UnderBanked',
      color:'pink'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
