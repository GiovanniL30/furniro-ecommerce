import React, { useState } from 'react'
import logo from '../assets/logo.png'
import cart from '../assets/cart-icon.png'
import heart from '../assets/heart-icon.png'
import account from '../assets/account-icon.png'
import search from '../assets/search-icon.png'
import hamburger from '../assets/hamburger.png'
import { navLinks } from '../constants'

import { NavLink } from 'react-router-dom'

const isActiveStyle = {
  color: '#B88E2F',
}

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className='h-24 max-container flex w-full items-center'>
      <div>
        <img src={logo} alt='logo' />
      </div>

      <div className={`w-6 ml-auto cursor-pointer lg:hidden`}>
        <img
          className='w-full object-contain'
          src={hamburger}
          alt='hamburger'
        />
      </div>

      <ul className='hidden lg:flex gap-10 items-center ml-auto'>
        {navLinks.map((link) => {
          return (
            <li key={link.link}>
              <NavLink
                to={link.link}
                style={({ isActive }) => (isActive ? isActiveStyle : {})}
              >
                <p className='font-semibold'>{link.name}</p>
              </NavLink>
            </li>
          )
        })}
        <li>
          <IconButton image={cart} link='cart' isLink={true} />
        </li>
      </ul>
    </header>
  )
}

const IconButton = ({ image, link = '', isLink = false }) => {
  return (
    <>
      {isLink ? (
        <NavLink to={link}>
          <button className='flex items-center justify-center'>
            <img className='w-full' src={image} alt={image} />
          </button>
        </NavLink>
      ) : (
        <button className='flex items-center justify-center'>
          <img className='w-full' src={image} alt={image} />
        </button>
      )}
    </>
  )
}

export default Header
