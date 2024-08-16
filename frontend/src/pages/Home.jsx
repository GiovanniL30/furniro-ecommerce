import React from 'react'
import {
  BrowseRange,
  Inspiration,
  Landing,
  OurProducts,
  Furnitures,
} from '../sections/home/index.js'

function Home() {
  return (
    <div>
      <section className='h-screen bg-black'>
        <Landing />
      </section>
      <section className='padding-t  padding-x'>
        <BrowseRange />
      </section>
      <section className='padding-t  padding-x'>
        <OurProducts />
      </section>
      <section className='bg-primary_2  bg-opacity-40 mt-20  padding-t'>
        <Inspiration />
      </section>
      <section className='padding-t '>
        <Furnitures />
      </section>
    </div>
  )
}

export default Home
