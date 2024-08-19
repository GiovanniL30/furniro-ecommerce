import React, { useState } from 'react'
import Banner from '../components/Banner.jsx'
import FilterSection from '../sections/shop/FilterSection.jsx'
import ShopProducts from '../sections/shop/ShopProducts.jsx'
import FooterBanner from '../components/FooterBanner.jsx'
import useFetch from '../hooks/useFetch.js'

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [limit, setLimit] = useState(8)

  const { isError, isFetching, data } = useFetch(
    `http://localhost:1099/api/products?page=${currentPage}&limit=${limit}`
  )

  return (
    <>
      <section>
        <Banner title='Shop' />
      </section>

      <div>
        <section className='padding-x w-full min-h-20 bg-primary_2 py-3'>
          {data && (
            <FilterSection
              totalProductsLength={data.totalProducts * data.totalPages}
              currentPage={currentPage}
              resultSize={data.products.length}
              limit={limit}
              setLimit={setLimit}
            />
          )}
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
        <section className='bg-primary_2 mt-20 padding-x'>
          <FooterBanner />
        </section>
      </div>
    </>
  )
}

export default Shop
