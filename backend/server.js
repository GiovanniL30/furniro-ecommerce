import express from 'express'
import productRouter from './routes/products.js'

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/products', productRouter)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
