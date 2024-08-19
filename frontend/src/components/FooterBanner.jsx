import React from 'react'
import quality from '../assets/trophy-icon.png'
import warranty from '../assets/guarantee-icon.png'
import shipping from '../assets/shipping-icon.png'
import support from '../assets/customer-support-icon.png'

const data = [
  {
    image: quality,
    title: 'High Quality',
    description: 'crafter from top materials',
  },
  {
    image: warranty,
    title: 'Warranty Protection',
    description: 'Over 2 years',
  },
  {
    image: shipping,
    title: 'Free Shipping',
    description: 'Order over 150$',
  },
  {
    image: support,
    title: '24/7 Support',
    description: 'Dedicated support',
  },
]

function FooterBanner() {
  return (
    <div className='max-container flex padding-y'>
      <div className='w-full grid grid-cols-1 gap-10 md:grid-cols-3 md:justify-between lg:grid-cols-4'>
        {data.map((d) => {
          return (
            <div className='flex items-center gap-2' key={d.title}>
              <img
                className='w-12 h-full object-contain'
                src={d.image}
                alt={d.title}
              />
              <div className='flex flex-col text-left '>
                <h1 className='text-lg font-semibold tracking-wide'>
                  {d.title}
                </h1>
                <p className='-mt-1 text-grey_1'>{d.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FooterBanner
