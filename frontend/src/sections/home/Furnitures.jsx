import React from 'react'
import image from '../../assets/furnitures.png'

const Furnitures = () => {
  return (
    <div className='xl:min-h-screen w-full flex flex-col lg:justify-center lg:items-center'>
      <div className='mt-12 text-center mb-5'>
        <p className='tracking-wide text-grey_2 mb-1 font-semibold text-lg'>
          Share your setup with
        </p>
        <h1 className='font-bold text-4xl text-font_color'>#FuniroFurniture</h1>
      </div>
      <div className='w-full lg:-mt-10 overflow-hidden flex justify-center'>
        <img
          className='object-contain w-full scale-[150%] lg:scale-100 max-w-[2000px]'
          src={image}
          alt='furnitures'
        />
      </div>
    </div>
  )
}

export default Furnitures
