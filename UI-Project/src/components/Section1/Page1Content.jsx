import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='pb-16 pt-6 px-18 flex h-[90vh] gap-10 justify-between items-center'>
     <LeftContent/>
     <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content
