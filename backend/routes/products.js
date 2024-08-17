import express from 'express'
import {
  getProduct,
  getProducts,
  paginationProducts,
} from '../controller/productsController.js'

const productRouter = express.Router()

// Get all products
productRouter.get('/', getProducts)

//Get product
productRouter.get('/:id', getProduct)

//Get products with pagination
productRouter.get('/pagination', paginationProducts)

export default productRouter
