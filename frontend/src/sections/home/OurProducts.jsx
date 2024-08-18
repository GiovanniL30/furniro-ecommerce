import React from 'react'
import ProductCard from '../../components/ProductCard'
import useFetch from '../../hooks/useFetch.js'
import ProductsGrid from '../../components/ProductsGrid.jsx'

const OurProducts = () => {
  const { isError, isFetching, data } = useFetch(
    'http://localhost:1099/api/products?limit=8'
  )

  if (isError) {
    return (
      <div className='max-container'>
        <h1 className='text-center font-bold text-font_color text-3xl'>
          Error Loading Products
        </h1>
      </div>
    )
  }

  return (
    <div className='max-container'>
      {isFetching && (
        <h1 className='text-center font-bold text-font_color text-3xl'>
          Loading Products
        </h1>
      )}

      {data && data.products && (
        <div className='flex flex-col'>
          <h1 className='text-center font-bold text-font_color text-3xl'>
            Our Products
          </h1>
          <ProductsGrid>
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
          </ProductsGrid>
          <button className=' self-center mt-12 border-primary_1 text-primary_1 rounded-sm w-full lg:w-52 py-2 border-[1px] hover:opacity-50 duration-300 ease-linear'>
            Show More
          </button>
        </div>
      )}

      {data && data.products && data.products.length == 0 && (
        <h1 className='text-center font-bold text-font_color text-3xl'>
          No Products Available
        </h1>
      )}
    </div>
  )
}

export default OurProducts
