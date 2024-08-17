import React from 'react'
import { useOutletContext } from 'react-router-dom'

const ProductDescription = () => {
  const { description } = useOutletContext()

  return (
    <div>
      <p className='text-justify text-grey_1'>{description}</p>
    </div>
  )
}

export default ProductDescription
