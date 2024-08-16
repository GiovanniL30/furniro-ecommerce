import React from 'react'
import star from '../assets/star.png'
import blankStar from '../assets/blank-star.png'

const Stars = ({ count }) => {
  const stars = []

  for (let i = 0; i < 5; i++) {
    stars.push(i < count ? star : blankStar)
  }

  return (
    <div className='flex gap-2 opacity-80 items-center'>
      {stars.map((starSrc, index) => (
        <img
          key={index}
          className='object-contain w-4'
          src={starSrc}
          alt='star'
        />
      ))}
    </div>
  )
}

export default Stars
