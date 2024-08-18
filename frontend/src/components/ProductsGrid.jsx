import React from 'react'

const ProductsGrid = ({ children }) => {
  return (
    <div className='grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-3 lg:grid-cols-4 mt-10'>
      {children}
    </div>
  )
}

export default ProductsGrid
