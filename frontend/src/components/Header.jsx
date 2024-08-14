import React from 'react'
import logo from '../assets/logo.png'
import cart from '../assets/cart-icon.png'
import heart from '../assets/heart-icon.png'
import account from '../assets/account-icon.png'
import search from '../assets/search-icon.png'
import { navLinks } from '../constants'

import { NavLink } from 'react-router-dom'

const isActiveStyle = {
  color: '#B88E2F',
}

const Header = () => {
  return (
    <header className='h-24 max-container flex w-full items-center'>
      <div>
        <img src={logo} alt='logo' />
      </div>

      <ul className='gap-14 hidden lg:flex md:mx-auto'>
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
      </ul>

      <ul className='gap-10 hidden lg:flex items-center'>
        <li>
          <IconButton image={account} />
        </li>
        <li>
          <IconButton image={search} />
        </li>
        <li>
          <IconButton image={heart} />
        </li>
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
