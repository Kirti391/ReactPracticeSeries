import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full w-2/3 p-5 flex flex-nowrap gap-10 overflow-x-auto rounded-4xl'>
      {/* <RightCard/>
       <RightCard/>
        <RightCard/> 
         <RightCard/>
        <RightCard/>  */}
     {props.users.map(function(ele,idx){
         return <RightCard key={idx} id={idx} img={ele.img} tag={ele.tag} />
     })}
    </div>
  )
}

export default RightContent
