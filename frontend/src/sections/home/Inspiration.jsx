import React, { useState } from 'react'
import image_1 from '../../assets/image-1.png'
import image_2 from '../../assets/image-2.png'
import image_3 from '../../assets/image-3.png'

const cards = [
  {
    image: image_1,
    name: 'Bed Room',
    detail: 'Inner Peace',
  },
  {
    image: image_2,
    name: 'Kitchen',
    detail: 'Inner Peace',
  },
  {
    image: image_3,
    name: 'Workplace',
    detail: 'Inner Peace',
  },
]

const Inspiration = () => {
  const [currentIndex, setCurrentIndex] = useState(1)
  const activeStyle = { height: '80%' }

  return (
    <div className='flex w-full justify-between'>
      {/* <div className='padding-l '>
        <h1>
          50+ Beautiful rooms <br /> inspiration
        </h1>
        <p>
          Our designer already amdfe a lot of beautiful prototype of rooms that
          inspire you
        </p>
        <button>Explore More</button>
      </div> */}
      {/* <div className='w-3/4 overflow-hidden'>
        <div className='translate-x-[-80%] flex gap-10 relative'>
          {cards.map((card, index) => {
            return (
              <div
                className='flex-none w-1/2 rounded-lg h-96'
                key={index}
                style={currentIndex === index ? activeStyle : {}}
              >
                <img
                  className='w-full h-full object-cover rounded-lg'
                  src={card.image}
                  alt='Card'
                />
                <div
                  className='absolute z-50 bottom-10 left-10'
                  style={currentIndex === index ? {} : { display: 'none' }}
                >
                  <h3 className='text-lg font-bold'>{card.name}</h3>
                  <p className='text-gray-500'>{card.detail}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div> */}
    </div>
  )
}

export default Inspiration
