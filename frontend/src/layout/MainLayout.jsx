import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div>
      <div className='padding-t padding-x'>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <div className='padding-x padding-t'>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
