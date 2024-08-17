import React, { useContext } from 'react'
import { useOutletContext } from 'react-router-dom'
import Stars from '../../components/Stars'

const ProductReviews = () => {
  const { reviews } = useOutletContext()

  return (
    <div className='flex justify-center gap-10 flex-wrap'>
      {reviews.map((review, index) => {
        return (
          <div key={index}>
            <div className='flex gap-3 opacity-80'>
              <h1 className='text-font_color font-bold'>{review.name}</h1>
              <Stars count={review.rating} />
            </div>
            <p className='text-grey_1'>{review.comment}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ProductReviews
