import React from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import { Cart, Checkout, About, Contact, Home, Shop } from './pages/index.js'
import MainLayout from './layout/MainLayout'
import ProductDetail from './layout/ProductDetail.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='shop' element={<Shop />} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='cart' element={<Cart />} />
      <Route path='shop/:id' element={<ProductDetail />}>
        <Route index element={<h1>Description goes here</h1>}></Route>
        <Route path='information' element={<h1>Information here</h1>} />
        <Route path='reviews' element={<h1>Reviews here</h1>} />
      </Route>
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
