import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner.jsx'
import FooterBanner from '../components/FooterBanner.jsx'
import { useCartContext } from '../context/CartContext.jsx'
import { getProduct } from '../../server/index.js'

const Cart = () => {
  const { cart } = useCartContext()
  const [cartProducts, setCartProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await Promise.all(
        cart.map(async (item) => {
          const product = await getProduct(item.getId())
          return { ...product, quantity: item.quantity }
        })
      )
      setCartProducts(productsData)
    }

    fetchProducts()
  }, [cart])

  return (
    <div>
      <section>
        <Banner title='Cart' />
      </section>
      <section className='padding'>
        <div className='max-container'>
          <div className='flex flex-col lg:grid lg:grid-cols-4 lg:gap-10'>
            <div className='lg:col-span-3'>
              <div className='flex w-full bg-primary_2 rounded-md justify-between py-2 px-5 '>
                <div className='hidden'></div>
                <p className='md:ml-20'>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
              </div>
              <div className='flex flex-col gap-5'>
                {cartProducts.map((item) => (
                  <div
                    key={item.id}
                    className='flex justify-between py-2 px-5 items-center'
                  >
                    <div className='flex flex-col md:flex-row md:gap-5 items-center md:ml-10 gap-y-2'>
                      <div className='bg-primary_2 w-20 h-20 rounded-lg'>
                        <img
                          src={item.image}
                          alt={item.name}
                          className='w-full'
                        />
                      </div>
                      <p>{item.name}</p>
                    </div>
                    <p>${item.price.toFixed(2)}</p>
                    <p>{item.quantity}</p>
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>Cart Totals</div>
          </div>
        </div>
      </section>
      <section className='bg-primary_2 mt-20 padding-x'>
        <FooterBanner />
      </section>
    </div>
  )
}

export default Cart
