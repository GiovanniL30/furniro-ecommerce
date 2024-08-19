import React from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import { Cart, Checkout, About, Contact, Home, Shop } from './pages/index.js'
import {
  ProdcutAdditional,
  ProductDescription,
  ProductReviews,
} from './sections/productDetail/index.js'
import MainLayout from './layout/MainLayout'
import ProductDetail from './layout/ProductDetail.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />

      <Route path='shop' element={<Shop />} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='cart' element={<Cart />} />
      <Route path='shop/:id' element={<ProductDetail />}>
        <Route index element={<ProductDescription />}></Route>
        <Route path='reviews' element={<ProductReviews />} />
      </Route>
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
