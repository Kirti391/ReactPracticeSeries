import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='py-10 px-18 flex h-[90vh] bg-amber-900 gap-10 justify-between items-center'>
     <LeftContent/>
     <RightContent/>
    </div>
  )
}

export default Page1Content
