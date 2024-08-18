import React from 'react'
import ProductCard from '../../components/ProductCard'
import useFetch from '../../hooks/useFetch.js'

const OurProducts = () => {
  const { isError, isFetching, data } = useFetch(
    'http://localhost:1099/api/products'
  )

  return (
    <div className='max-container'>
      {isError ? (
        <h1 className='text-center font-bold text-font_color text-3xl'>
          Error Loading Products
        </h1>
      ) : isFetching ? (
        <h1 className='text-center font-bold text-font_color text-3xl'>
          Loading Products
        </h1>
      ) : data && data.products ? (
        <div className='flex flex-col'>
          <h1 className='text-center font-bold text-font_color text-3xl'>
            Our Products
          </h1>
          <div className='grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-3 lg:grid-cols-4 mt-10'>
            {data.products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                details={product.details}
                price={product.price}
                discount={product.discount}
                isNew={product.isNew}
                image={product.image}
                id={product.id}
              />
            ))}
          </div>
          <button className=' self-center mt-12 border-primary_1 text-primary_1 rounded-sm w-full lg:w-52 py-2 border-[1px] hover:opacity-50 duration-300 ease-linear'>
            Show More
          </button>
        </div>
      ) : (
        <h1 className='text-center font-bold text-font_color text-3xl'>
          No Products Available
        </h1>
      )}
    </div>
  )
}

export default OurProducts
