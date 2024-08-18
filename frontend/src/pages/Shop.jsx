import React, { useState } from 'react'
import Banner from '../components/Banner.jsx'
import FilterSection from '../sections/shop/FilterSection.jsx'
import ShopProducts from '../sections/shop/ShopProducts.jsx'
import useFetch from '../hooks/useFetch.js'

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const { isError, isFetching, data } = useFetch(
    `http://localhost:1099/api/products?page=${currentPage}&limit=16`
  )

  return (
    <>
      <section>
        <Banner title='Shop' />
      </section>

      <div>
        <section className='padding-x'>
          <FilterSection />
        </section>
        <section className='padding-x'>
          <ShopProducts
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            isError={isError}
            isFetching={isFetching}
            data={data}
          />
        </section>
      </div>
    </>
  )
}

export default Shop
