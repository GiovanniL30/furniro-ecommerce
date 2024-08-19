import React from 'react'
import Stars from '../../components/Stars'
import { computeDiscount } from '../../utils/index.js'
import { useCartContext } from '../../context/CartContext.jsx'

const ProductInfo = ({
  product,
  averageReview,
  totalReviews,
  quantity,
  setQuantity,
  id,
}) => {
  const { dispatch, ACTIONS } = useCartContext()
  return (
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
            <button
              onClick={() => {
                dispatch({
                  type: ACTIONS.ADD_T0_CART,
                  payload: { id: id, quantity: quantity },
                })
                setQuantity(1)
              }}
              className='w-1/2 border-[1px] border-black rounded-md'
            >
              Add To Cart
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductInfo
