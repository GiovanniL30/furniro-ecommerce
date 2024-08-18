import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import ProductCard from '../../components/ProductCard'
import ProductsGrid from '../../components/ProductsGrid'

const RelatedProducts = ({ tags, id }) => {
  tags = tags.reduce((final, cur) => final + cur + ',', '').slice(0, -1)

  const { isError, isFetching, data } = useFetch(
    `http://localhost:1099/api/products?tag=${tags}&limit=4`
  )

  return (
    <div className='max-container'>
      {data && data.products.length > 1 && (
        <h1 className='mt-20 mb-10 text-center font-semibold text-3xl text-font_color'>
          Related Products
        </h1>
      )}
      <ProductsGrid>
        {data &&
          data.products.map((product) =>
            id != product.id ? (
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
            ) : (
              ''
            )
          )}
      </ProductsGrid>
    </div>
  )
}

export default RelatedProducts
