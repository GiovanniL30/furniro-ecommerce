import React from 'react'
import {
  BrowseRange,
  Landing,
  OurProducts,
  Furnitures,
} from '../sections/home/index.js'

function Home() {
  return (
    <div className='mb-32'>
      <section className='h-screen bg-black'>
        <Landing />
      </section>
      <section className='padding-t  padding-x'>
        <BrowseRange />
      </section>
      <section className='padding-t  padding-x'>
        <OurProducts />
      </section>
      <hr className='my-20' />
      <section>
        <Furnitures />
      </section>
    </div>
  )
}

export default Home
