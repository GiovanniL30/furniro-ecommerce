import React, { useEffect, useState } from 'react'
import { getProduct } from '../../server'
import { NavLink, useParams } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { computeDiscount } from '../utils'
import Stars from '../components/Stars'

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
    <div>
      <div className='w-full bg-primary_2 h-20'>
        <div className='h-full max-container padding-x flex items-center gap-x-3'>
          <p className='text-grey_2 font-semibold text-sm'>Home</p>
          <p className='font-bold text-font_color text-xl'>{'>'}</p>
          <p className='text-grey_2 font-semibold text-sm'>Shop</p>
          <p className='font-bold text-font_color text-xl'>{'>'}</p>
          <p className='text-2xl'>{'|'}</p>
          <p className='font-semibold text-font_color'>{product.name}</p>
        </div>
      </div>

      <div className='padding-x'>
        <div className='max-container  mt-7'>
          <section className='flex flex-col md:flex-row md:gap-10'>
            <div className='w-full pb-6 md:w-1/2 max-w-[600px] h-full md:pb-0'>
              <img
                className='object-contain w-full h-full rounded-md '
                src={product.image}
                alt={product.name}
              />
            </div>

            <div className='flex flex-col gap-20 justify-between md:w-1/2'>
              <div className='flex flex-col gap-2'>
                <h1 className='font-bold text-font_color text-3xl'>
                  {product.name}
                </h1>
                <p className='text-xl text-grey_1'>
                  $
                  {product.discount != 0
                    ? product.price -
                      computeDiscount(product.price, product.discount)
                    : product.price}
                </p>
                <div className='flex gap-3 items-center'>
                  <Stars count={averageReview} />
                  <p className='text-2xl text-grey_1'>{'|'}</p>
                  <p className='text-grey_1'>{totalReviews} Customer Review</p>
                </div>
                <p>{product.information}</p>
              </div>

              <div className='flex gap-2 w-full'>
                <div className='flex gap-4 border-[1px] w-1/2 rounded-md justify-between py-2'>
                  <button
                    onClick={() =>
                      setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                    }
                    className='pl-3'
                  >
                    -
                  </button>
                  <p>{quantity}</p>
                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className='pr-3'
                  >
                    +
                  </button>
                </div>
                <button className='w-1/2 border-[1px] border-black rounded-md'>
                  Add To Cart
                </button>
              </div>
            </div>
          </section>
        </div>
        <hr className='mt-6' />
        <div className='max-container'>
          <section>
            <div>
              <NavLink to={'.'}>Description</NavLink>
              <NavLink to={'information'}>Additional Information</NavLink>
              <NavLink to={'reviews'}>Reviews</NavLink>
            </div>
            <div>
              <Outlet />
            </div>
          </section>
          <section>Related Products</section>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
