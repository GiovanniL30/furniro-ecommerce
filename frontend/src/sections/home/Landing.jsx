import React from 'react'
import cover from '../../assets/landing-cover.png'

const Landing = () => {
  return (
    <div className='w-full h-full relative'>
      <img
        className='absolute w-full h-full object-cover'
        src={cover}
        alt='cover image'
      />
      <div className='padding-x 2xl:p-0 max-container  relative w-full h-full flex justify-center items-center'>
        <div className='hidden md:flex lg:w-1/2'></div>
        <div className='bg-primary_2 w-full lg:w-1/2  flex flex-col justify-center items-start p-5 rounded-md  pb-10 lg:p-10'>
          <h1 className='text-font_color tracking-wide font-semibold pt-10 text-lg'>
            New Arrival
          </h1>
          <h1 className='text-primary_1 font-bold text-5xl tracking-wide leading-tight py-3'>
            Discover Our <br /> New Collection
          </h1>
          <p className='text-font_color font-semibold pb-16'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            deserunt, laudantium facere repellat unde esse, sapiente officiis
            alias molestiae quae rem officia autem
          </p>
          <button className='p-4 bg-primary_1 rounded-sm uppercase font-bold text-white w-1/2 hover:opacity-50 duration-500 ease-linear '>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Landing
