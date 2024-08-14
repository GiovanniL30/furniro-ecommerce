import React from 'react'
import dining from '../../assets/dining-img.png'
import living from '../../assets/living-img.png'
import bedroom from '../../assets/bedroom-img.png'

const items = [
  {
    name: 'Dining',
    img: dining,
  },
  {
    name: 'Living',
    img: living,
  },
  {
    name: 'Bedroom',
    img: bedroom,
  },
]

const BrowseRange = () => {
  return (
    <div className='max-container flex flex-col justify-center items-center'>
      <div className='mb-12'>
        <h1 className='font-bold text-center tracking-wide pb-1 text-2xl text-font_color'>
          Browse The Range
        </h1>
        <p className='text-grey_2 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          modi?
        </p>
      </div>

      <div className='w-full flex gap-10 flex-wrap lg:flex-nowrap justify-center lg:justify-between'>
        {items.map((item) => (
          <ItemCard name={item.name} img={item.img} />
        ))}
      </div>
    </div>
  )
}

const ItemCard = ({ name, img }) => {
  return (
    <div className='flex flex-col gap-2 items-center justify-center w-full'>
      <div className='lg:w-full'>
        <img className='rounded-lg object-cover w-full' src={img} alt={name} />
      </div>
      <p className='font-semibold text-font-color'>{name}</p>
    </div>
  )
}

export default BrowseRange
