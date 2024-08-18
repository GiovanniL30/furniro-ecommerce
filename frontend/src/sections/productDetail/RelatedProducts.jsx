import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'

const RelatedProducts = ({ tags }) => {
  const { isError, isFetching, data } = useFetch(
    `http://localhost:1099/api/products?tag=${tags}&limit=3`
  )

  if (!data) return <h1>Loading</h1>

  return <div className='max-container'>{JSON.stringify(data.products)}</div>
}

export default RelatedProducts
