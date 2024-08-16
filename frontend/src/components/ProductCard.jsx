import React from 'react'
import share from '../assets/share-icon.png'
import compare from '../assets/compare-icon.png'
import like from '../assets/like-icon.png'
import { computeDiscount } from '../utils'

const ProductCard = ({ name, details, price, discount, isNew, image }) => {
  return (
    <div className='relative overflow-hidden flex flex-col w-full group bg-grey_2 rounded-md bg-opacity-10'>
      <div className='group-hover:translate-y-0 translate-y-[102%]  bg-opacity-80 bg-grey_3 absolute w-full h-full flex gap-5 items-center justify-center flex-col top-0 bottom-0 duration-300 ease-linear'>
        <button className='font-bold bg-white text-primary_1 rounded-sm w-3/4 py-2 hover:opacity-50 duration-300 ease-linear'>
          Add to Cart
        </button>
        <div className='flex flex-col xl:flex-row gap-5 items-center text-white font-semibold'>
          <ActionButton name={'Share'} image={share} />
          <ActionButton name={'Compare'} image={compare} />
          <ActionButton name={'Like'} image={like} />
        </div>
      </div>
      <div className='w-full'>
        <img className='w-full object-cover ' src={image} alt={name} />
      </div>
      <div className='flex flex-col gap-3 p-3 '>
        <h1 className='font-bold text-font_color text-2xl'>{name}</h1>
        <p className='text-grey_2 font-semibold '>{details}</p>
        <div className='text-font_color font-semibold flex justify-between'>
          <p>
            ${discount != 0 ? price - computeDiscount(price, discount) : price}
          </p>
          {discount != 0 && (
            <p className='line-through text-grey_1 self-end'>
              ${computeDiscount(price, discount)}
            </p>
          )}
        </div>
      </div>
      {discount != 0 && (
        <div className='absolute right-3 top-3 bg-pink_red text-white text-[0.7em]  w-10 h-10 flex items-center justify-center rounded-full'>
          -{discount}%
        </div>
      )}
      {isNew && (
        <div className='absolute right-3 top-3 bg-aqua_teal text-white  text-[0.7em] w-10 h-10 flex items-center justify-center rounded-full'>
          NEW
        </div>
      )}
    </div>
  )
}

const ActionButton = ({ image, name }) => {
  return (
    <button className='flex items-center gap-2'>
      <img src={image} alt={name} />
      <p className='hover:text-primary_1 duration-300 ease-linear'>{name}</p>
    </button>
  )
}

export default ProductCard
