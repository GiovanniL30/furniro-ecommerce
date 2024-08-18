import React from 'react'
import cover from '../assets/shop-conver.png'
import Shop from '../pages/Shop'

const Banner = ({ title }) => {
  return (
    <div className='relative w-full h-[200px] lg:h-[300px] '>
      <img
        className='object-cover w-full h-full object-left'
        src={cover}
        alt='image cover'
      />
      <div className='absolute  flex flex-col gap-3 items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h1 className='text-5xl font-semibold tracking-wide'>{title}</h1>
        <p>
          <span className='font-bold'>
            Home <span>{'>'}</span>{' '}
          </span>{' '}
          {title}
        </p>
      </div>
    </div>
  )
}

export default Banner
