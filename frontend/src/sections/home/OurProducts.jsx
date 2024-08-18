import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'
import { getProducts as getProductsFromServer } from '../../../server'

const OurProducts = () => {
  const [products, setProducts] = useState([])
  const [fetching, isFetching] = useState(true)
  const [error, isError] = useState(false)

  useEffect(() => {
    async function getProducts() {
      isFetching(true)
      isError(false)

      try {
        const products = await getProductsFromServer()
        setProducts(products.products)
      } catch (error) {
        isError(true)
      } finally {
        isFetching(false)
      }
    }

    getProducts()
  }, [])

  return (
    <div className='max-container'>
      {error ? (
        <h1 className='text-center font-bold text-font_color text-3xl'>
          Error Loading Products
        </h1>
      ) : fetching ? (
        <h1 className='text-center font-bold text-font_color text-3xl'>
          Loading Products
        </h1>
      ) : (
        <div className='flex flex-col'>
          <h1 className='text-center font-bold text-font_color text-3xl'>
            Our Products
          </h1>
          <div className='grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-3 lg:grid-cols-4 mt-10'>
            {products.map((product) => (
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
      )}
    </div>
  )
}

export default OurProducts
