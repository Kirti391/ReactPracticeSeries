import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroText from './HeroText'
import Arrow from './Arrow'
const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 '>
      {/* <div className='p-6'>
        <h3 className='mb-7 text-6xl font-bold'>Prospective <br/><span >customer</span><br/>segmentation</h3>
        <p className='text-xl font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor provident nihil accusantium architecto numquam cum ab repudiandae laborum tempore, explicabo quaerat commodi corporis laboriosam ipsam totam atque praesentium vitae iure?</p>
      </div>
     <div className='text-8xl'>
      <i className="ri-arrow-right-up-line"></i>
    </div> */}
    <HeroText/>
    <Arrow/>
    </div>
  )
}

export default LeftContent
