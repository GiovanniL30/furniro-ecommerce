import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ProductInfo from '../sections/productDetail/ProductInfo'
import ProductAdditionalInfo from '../sections/productDetail/ProductAdditionalInfo'
import RelatedProducts from '../sections/productDetail/RelatedProducts'

const ProductDetail = () => {
  const { id } = useParams()
  const { isError, isFetching, data } = useFetch(
    `http://localhost:1099/api/products/${id}`
  )

  const [totalReviews, setTotalReviews] = useState(0)
  const [averageReview, setAverageReviews] = useState(0)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    if (data && data.reviews) {
      setTotalReviews(data.reviews.length)
      const totalRating = data.reviews.reduce(
        (total, review) => total + review.rating,
        0
      )
      setAverageReviews(
        data.reviews.length > 0
          ? (totalRating / data.reviews.length).toFixed(0)
          : 0
      )
    }
  }, [data])

  if (isFetching) {
    return (
      <div className='max-container'>
        <h1 className='text-center font-bold'>Fetching Product...</h1>
      </div>
    )
  }

  if (isError || !data) {
    return (
      <div className='max-container'>
        <h1 className='text-center font-bold'>
          {isError
            ? `Failed to load product with id of ${id}`
            : 'No product data available'}
        </h1>
      </div>
    )
  }

  return (
    <main className='mb-32'>
      <header className='w-full bg-primary_2 h-20 padding-x'>
        <div className='h-full max-container flex items-center gap-x-3'>
          <p className='text-grey_2 font-semibold text-sm'>Home</p>
          <p className='font-bold text-font_color text-xl'>{'>'}</p>
          <p className='text-grey_2 font-semibold text-sm'>Shop</p>
          <p className='font-bold text-font_color text-xl'>{'>'}</p>
          <p className='text-2xl'>{'|'}</p>
          <p className='font-semibold text-font_color'>{data.name}</p>
        </div>
      </header>

      <section className='padding-x padding-b'>
        <ProductInfo
          product={data}
          averageReview={averageReview}
          totalReviews={totalReviews}
          setQuantity={setQuantity}
          quantity={quantity}
          id={id}
        />
      </section>
      <hr className='mt-6' />
      <section className='padding-x padding-t'>
        <ProductAdditionalInfo product={data} totalReviews={totalReviews} />
      </section>
      <section className='padding-x'>
        <RelatedProducts tags={data.tags} id={id} />
      </section>
    </main>
  )
}

export default ProductDetail
