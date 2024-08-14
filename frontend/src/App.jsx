import React from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import { Cart, Checkout, About, Contact, Home, Shop } from './pages/index.js'
import MainLayout from './layout/MainLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='shop' element={<Shop />} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='cart' element={<Cart />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
