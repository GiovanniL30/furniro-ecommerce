import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CartProvider from '../context/CartContext'

const MainLayout = () => {
  return (
    <CartProvider>
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
    </CartProvider>
  )
}

export default MainLayout
