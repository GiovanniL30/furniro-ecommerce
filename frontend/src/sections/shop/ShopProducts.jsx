import React, { useEffect } from 'react'
import ProductsGrid from '../../components/ProductsGrid.jsx'
import ProductCard from '../../components/ProductCard.jsx'

const ShopProducts = ({
  isError,
  isFetching,
  data,
  currentPage,
  setCurrentPage,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])
  if (isError) {
    return (
      <div className='max-container'>
        <h1 className=''>Having Error Fetching Shop Products</h1>
      </div>
    )
  }

  if (isFetching || !data) {
    return (
      <div className='max-container'>
        <h1 className=''>Loading Products...</h1>
      </div>
    )
  }

  const totalPages = data?.totalPages || 1

  return (
    <div className='max-container'>
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
      {data && (
        <div className='flex justify-center gap-5 mt-10'>
          {Array.from({ length: totalPages }, (_, index) => (
            <div
              key={index + 1}
              className={`text-black bg-primary_2  w-10 h-10 flex items-center justify-center rounded-md ${
                currentPage === index + 1 ? ' !bg-primary_1 !text-white' : ''
              }`}
            >
              {index + 1}
            </div>
          ))}

          {totalPages != 1 && (
            <button
              className='hover:opacity-50 duration-500 ease-linear text-black bg-primary_2  px-5 flex items-center justify-center rounded-md'
              onClick={() =>
                setCurrentPage((prev) => (prev >= totalPages ? 1 : prev + 1))
              }
            >
              Next
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default ShopProducts
