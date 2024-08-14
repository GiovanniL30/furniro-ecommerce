const products = [
  {
    name: 'Syltherine',
    details: 'Stylish cafe chair',
    price: 2500000,
    discount: 30,
    isNew: false,
    id: 1,
  },
  {
    name: 'Leviosa',
    details: 'Stylish cafe chair',
    price: 2500000,
    discount: 0,
    isNew: false,
    id: 2,
  },
  {
    name: 'Lolito',
    details: 'Luxury big sofa',
    price: 7000000,
    discount: 50,
    isNew: false,
    id: 3,
  },
  {
    name: 'Respira',
    details: 'Outdoor bar table and stool',
    price: 500,
    discount: 0,
    isNew: true,
    id: 4,
  },
]

// @desc   Get all products
// @route  GET /api/products
export const getProducts = (req, res, next) => {
  res.status(200).json(products)
}

// @desc   Get a single product
// @route  GET /api/products/:id
export const getProduct = (req, res, next) => {
  const { id } = req.params

  const product = products.find((p) => p.id == id)

  if (!product) {
    return res
      .status(400)
      .json({ message: `Product with id of ${id} is not found` })
  }

  res.status(200).json(product)
}
