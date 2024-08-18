import React, { useEffect, useState } from 'react'
import { getProduct } from '../../server'
import { useParams, NavLink } from 'react-router-dom'

import ProductInfo from '../sections/productDetail/ProductInfo'
import ProductAdditionalInfo from '../sections/productDetail/ProductAdditionalInfo'
import RelatedProducts from '../sections/productDetail/RelatedProducts'

const ProductDetail = () => {
  const { id } = useParams()

  const [product, setProduct] = useState({})
  const [isFethcing, setIsFetching] = useState(false)
  const [totalReviews, setTotalReviews] = useState(0)
  const [isError, setIsError] = useState(false)
  const [averageReview, setAverageReviews] = useState(0)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    setIsFetching(true)
    setIsError(false)

    const fetchProduct = async () => {
      try {
        const data = await getProduct(id)
        setProduct(data)
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
      } catch (error) {
        setIsError(true)
      } finally {
        setIsFetching(false)
      }
    }

    fetchProduct()
  }, [id])

  if (isError || isFethcing) {
    return (
      <div className='max-container'>
        <h1 className='text-center font-bold'>
          {isError
            ? `Failed to load product with id of ${id}`
            : 'Fethcing Product...'}
        </h1>
      </div>
    )
  }

  return (
    <main>
      <header className='w-full bg-primary_2 h-20 padding-x'>
        <div className='h-full max-container  flex items-center gap-x-3'>
          <NavLink to={'.'}>back</NavLink>
          <p className='text-grey_2 font-semibold text-sm'>Home</p>
          <p className='font-bold text-font_color text-xl'>{'>'}</p>
          <p className='text-grey_2 font-semibold text-sm'>Shop</p>
          <p className='font-bold text-font_color text-xl'>{'>'}</p>
          <p className='text-2xl'>{'|'}</p>
          <p className='font-semibold text-font_color'>{product.name}</p>
        </div>
      </header>

      <section className='padding-x padding-b'>
        <ProductInfo
          product={product}
          averageReview={averageReview}
          totalReviews={totalReviews}
          setQuantity={setQuantity}
          quantity={quantity}
        />
      </section>
      <hr className='mt-6' />
      <section className='padding-x padding-t'>
        <ProductAdditionalInfo product={product} totalReviews={totalReviews} />
      </section>
      <section className='padding-x'>
        <RelatedProducts />
      </section>
    </main>
  )
}

export default ProductDetail
