import React from 'react'
import { Outlet } from 'react-router-dom'
Outlet

const Shop = () => {
  return (
    <div className='max-container'>
      <Outlet />
    </div>
  )
}

export default Shop
