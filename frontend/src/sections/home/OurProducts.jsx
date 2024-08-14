import React, { useEffect, useState } from 'react'

const OurProducts = () => {
  const [products, setProducts] = useState([])
  const [fetching, isFetching] = useState(true)
  const [error, isError] = useState(false)

  useEffect(() => {
    async function getProducts() {
      isFetching(true)
      isError(false)

      try {
        const response = await fetch('http://localhost:1099/api/products', {
          method: 'GET',
        })

        if (response.ok) {
          const data = await response.json()
          setProducts(data)
        } else {
          isError(true)
        }
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
        <div>
          <h1 className='text-center font-bold text-font_color text-3xl'>
            Our Products
          </h1>
          <div></div>
        </div>
      )}
    </div>
  )
}

export default OurProducts
