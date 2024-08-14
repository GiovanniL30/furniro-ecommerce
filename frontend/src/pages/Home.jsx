import React from 'react'
import {
  BrowseRange,
  Inspiration,
  Landing,
  OurProducts,
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
      <section className='padding-t  padding-x'>
        <Inspiration />
      </section>
    </div>
  )
}

export default Home
