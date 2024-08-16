import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='relative'>
      <div className='max-container flex flex-col gap-20'>
        <footer className='flex flex-col gap-y-6 lg:flex-row lg:justify-between'>
          <div className='flex flex-col gap-y-8'>
            <h1 className='text-3xl font-bold text-font_color '>Funiro.</h1>
            <p className='text-grey_2 font-thin '>
              400 University Drive Suite 200 Coral <br /> Gables, <br />
              FL 33134 USA
            </p>
          </div>
          <div className='flex flex-col gap-y-6 md:flex-row md:justify-between lg:w-1/3'>
            <div className='flex flex-col gap-y-8'>
              <h1 className='font-semibold text-grey_2'>Links</h1>
              <div className='flex gap-5 lg:flex-col lg:gap-10'>
                <Links text={'Home'} path='/' />
                <Links text={'Shop'} path='shop' />
                <Links text={'About'} path='about' />
                <Links text={'Contact'} path='contact' />
              </div>
            </div>
            <div className='flex flex-col gap-y-8'>
              <h1 className='font-semibold text-grey_2'>Help</h1>
              <div className='flex gap-5 lg:flex-col lg:gap-10'>
                <Links text={'Payment Options'} />
                <Links text={'Returns'} />
                <Links text={'Privacy Policies'} />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-y-8'>
            <h1 className='font-semibold text-grey_2'>Newsletter</h1>
            <div className='flex'>
              <input
                className='outline-none border-b-2'
                type='text'
                placeholder='Enter Your Email Address'
              />
              <button className='border-b-2 ml-3 font-semibold'>
                SUBSCRIBE
              </button>
            </div>
          </div>
        </footer>
        <hr />
        <h1 className='mb-10 text-font_color  text-center  font-semibold'>
          2023 funiro. All rights reserved
        </h1>
      </div>
    </div>
  )
}

const Links = ({ path = '', text }) => {
  return (
    <Link
      className='font-semibold text-font_color hover:text-primary_1 duration-300 ease-linear'
      to={path}
    >
      {text}
    </Link>
  )
}

export default Footer
