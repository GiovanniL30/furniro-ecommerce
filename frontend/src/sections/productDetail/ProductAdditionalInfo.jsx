import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const activeStyle = { color: '#3A3A3A', fontWeight: '600' }
const inActive = { color: '#B0B0B0' }

const ProductAdditionalInfo = ({ product, totalReviews }) => {
  return (
    <div className='max-container'>
      <div className='flex flex-col gap-10'>
        <div className='flex justify-between md:justify-center md:gap-20'>
          <NavLink
            end
            className='text-lg'
            style={({ isActive }) => (isActive ? activeStyle : inActive)}
            to={'.'}
          >
            Description
          </NavLink>

          <NavLink
            className='text-lg'
            style={({ isActive }) => (isActive ? activeStyle : inActive)}
            to={'reviews'}
          >
            Reviews [ {totalReviews} ]
          </NavLink>
        </div>
        <div>
          <Outlet context={product} />
        </div>
      </div>
    </div>
  )
}

export default ProductAdditionalInfo
