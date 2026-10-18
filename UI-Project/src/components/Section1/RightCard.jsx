import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 shrink-0 overflow-hidden relative bg-white rounded-4xl'>
      <img className='w-full h-full object-cover' src={props.img} tag={props.tag}alt='working_professional'/>

      <RightCardContent color={props.color} tag={props.tag} id={props.id}/>

    </div>
  )
}

export default RightCard
