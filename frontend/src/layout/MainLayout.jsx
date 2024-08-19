import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div>
      <div className='padding-x fixed top-0 bg-white left-0 right-0 z-50'>
        <Header />
      </div>
      <div className='pt-24 min-h-screen'>
        <Outlet />
      </div>
      <hr />
      <div className='padding-x padding-t'>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
