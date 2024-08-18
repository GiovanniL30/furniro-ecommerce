import express from 'express'
import { getProduct, getProducts } from '../controller/productsController.js'

const productRouter = express.Router()

// Get all products
productRouter.get('/', getProducts)

//Get product
productRouter.get('/:id', getProduct)

export default productRouter
