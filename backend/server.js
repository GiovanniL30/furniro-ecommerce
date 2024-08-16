import { fileURLToPath } from 'url'
import path from 'path'
import express from 'express'
import productRouter from './routes/products.js'

const PORT = process.env.PORT || 1099
const app = express()
const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/images', express.static('images'))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.use('/api/products', productRouter)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
