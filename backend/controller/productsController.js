const PORT = process.env.PORT || 1099

const products = [
  {
    name: 'Syltherine',
    details: 'Stylish cafe chair',
    price: 2500000,
    discount: 30,
    isNew: false,
    image: `http://localhost:${PORT}/api/images/syltherine-img.png`,
    id: 1,
  },
  {
    name: 'Leviosa',
    details: 'Stylish cafe chair',
    price: 2500000,
    discount: 0,
    isNew: false,
    image: `http://localhost:${PORT}/api/images/leviosa-img.png`,
    id: 2,
  },
  {
    name: 'Lolito',
    details: 'Luxury big sofa',
    price: 7000000,
    discount: 50,
    isNew: false,
    image: `http://localhost:${PORT}/api/images/lolito-img.png`,
    id: 3,
  },
  {
    name: 'Respira',
    details: 'Outdoor bar table and stool',
    price: 500,
    discount: 0,
    isNew: true,
    image: `http://localhost:${PORT}/api/images/respira-img.png`,
    id: 4,
  },
  {
    name: 'Grifo',
    details: 'Night lamp',
    price: 1500,
    discount: 0,
    isNew: false,
    image: `http://localhost:${PORT}/api/images/grifo-img.png`,
    id: 5,
  },
  {
    name: 'Muggo',
    details: 'Small mug',
    price: 150,
    discount: 0,
    isNew: true,
    image: `http://localhost:${PORT}/api/images/muggo-img.png`,
    id: 6,
  },
  {
    name: 'Pingky',
    details: 'Cute bed set',
    price: 7000000,
    discount: 50,
    isNew: false,
    image: `http://localhost:${PORT}/api/images/pingky-img.png`,
    id: 7,
  },
  {
    name: 'Potty',
    details: 'Minimalist flower pot',
    price: 500000,
    discount: 0,
    isNew: true,
    image: `http://localhost:${PORT}/api/images/potty-img.png`,
    id: 8,
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
