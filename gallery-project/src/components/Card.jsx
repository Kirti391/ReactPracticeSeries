import React from 'react'

const Card = (props) => {
    console.log(props);
  return (
    <div>
      <a href={props.ele.url} target='_blank'>
          <div className='h-40 w-44 bg-white rounded-xl overflow-hidden'>
            <img src={props.ele.download_url} alt='image' className='h-full w-full object-cover' />

          </div>
          <h2 className='font-bold text-lg'>{props.ele.author}</h2>
        </a>
    </div>
  )
}

export default Card
