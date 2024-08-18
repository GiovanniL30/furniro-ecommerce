const PORT = process.env.PORT || 1099

const products = [
  {
    name: 'Syltherine',
    details: 'Stylish cafe chair',
    price: 2500000,
    discount: 30,
    isNew: false,
    image: `http://localhost:${PORT}/api/images/syltherine-img.png`,
    information:
      'This stylish cafe chair is a perfect addition to any modern decor. It combines elegance with comfort, making it an ideal choice for both home and commercial use.',
    description:
      'The Syltherine cafe chair features a sleek design that effortlessly fits into any setting. Its durable construction ensures longevity, while the ergonomic design provides superior comfort. Perfect for cafes, restaurants, or your home dining area.\n\nWhether you’re enjoying a quick coffee break or a full meal, the Syltherine chair offers the support you need. Its stylish appearance adds a touch of sophistication to any space, making it a versatile and valuable addition to your furniture collection.',
    reviews: [
      { name: 'Alice', rating: 5, comment: 'Very comfortable and stylish!' },
      { name: 'Bob', rating: 4, comment: 'Good value for money.' },
      { name: 'Charlie', rating: 4, comment: 'Looks great in my cafe!' },
    ],
    tags: ['cafe', 'chair', 'modern', 'stylish', 'commercial use'],
    id: 1,
  },
  {
    name: 'Leviosa',
    details: 'Stylish cafe chair',
    price: 2500000,
    discount: 0,
    isNew: false,
    image: `http://localhost:${PORT}/api/images/leviosa-img.png`,
    information:
      'This stylish cafe chair is a perfect addition to any modern decor. It combines elegance with comfort, making it an ideal choice for both home and commercial use.',
    description:
      'The Leviosa cafe chair offers a sleek and modern design that complements any setting. Made with high-quality materials, it provides both comfort and durability.\n\nWhether in a cafe, restaurant, or home, this chair adds a stylish touch to any space. Its ergonomic design ensures comfort, making it a perfect choice for long sitting sessions.',
    reviews: [
      { name: 'David', rating: 5, comment: 'Perfect for my dining room!' },
      { name: 'Eve', rating: 4, comment: 'Stylish and comfortable.' },
      { name: 'Frank', rating: 4, comment: 'Highly recommended!' },
    ],
    tags: ['cafe', 'chair', 'modern', 'ergonomic', 'home use'],
    id: 2,
  },
  {
    name: 'Lolito',
    details: 'Luxury big sofa',
    price: 7000000,
    discount: 50,
    isNew: false,
    image: `http://localhost:${PORT}/api/images/lolito-img.png`,
    information:
      'Experience ultimate comfort with this luxury big sofa. Perfect for large living rooms, it adds a touch of elegance and provides ample seating for family and guests.',
    description:
      'The Lolito sofa is designed with both luxury and comfort in mind. Its plush cushions and spacious seating make it a perfect choice for family gatherings or simply lounging.\n\nCrafted with high-quality materials, this sofa ensures durability and style. Its elegant design makes it a centerpiece in any living room, offering both comfort and sophistication.',
    reviews: [
      {
        name: 'Grace',
        rating: 5,
        comment: 'Extremely comfortable and stylish!',
      },
      { name: 'Heidi', rating: 5, comment: 'Perfect for large families.' },
      { name: 'Ivan', rating: 4, comment: 'Worth every penny!' },
    ],
    tags: ['sofa', 'luxury', 'living room', 'large', 'comfortable'],
    id: 3,
  },
  {
    name: 'Respira',
    details: 'Outdoor bar table and stool',
    price: 500,
    discount: 0,
    isNew: true,
    image: `http://localhost:${PORT}/api/images/respira-img.png`,
    information:
      'A stylish and practical outdoor bar table and stool set. Perfect for garden parties or casual outdoor dining.',
    description:
      'The Respira outdoor bar table and stool set is designed to elevate your outdoor space. With its durable construction and weather-resistant materials, it’s perfect for both residential and commercial use.\n\nWhether you’re hosting a garden party or enjoying a quiet evening outdoors, this set provides the perfect combination of style and functionality. Its sleek design fits well in any outdoor setting.',
    reviews: [
      { name: 'Jack', rating: 4, comment: 'Great for my backyard!' },
      { name: 'Kim', rating: 4, comment: 'Sturdy and stylish.' },
      { name: 'Leo', rating: 4, comment: 'Perfect for outdoor use.' },
    ],
    tags: ['outdoor', 'bar table', 'stool', 'garden', 'weather-resistant'],
    id: 4,
  },
  {
    name: 'Grifo',
    details: 'Night lamp',
    price: 1500,
    discount: 0,
    isNew: false,
    image: `http://localhost:${PORT}/api/images/grifo-img.png`,
    information:
      'This elegant night lamp is a perfect addition to any bedroom. It provides soft, ambient lighting that enhances the room’s atmosphere.',
    description:
      'The Grifo night lamp combines modern design with functionality. Its soft light creates a relaxing ambiance, perfect for winding down at the end of the day.\n\nCrafted with high-quality materials, this lamp is not only stylish but also durable. It’s an ideal choice for bedrooms, living rooms, or any space where you want to add a touch of elegance.',
    reviews: [
      { name: 'Mia', rating: 5, comment: 'Perfect lighting for my bedroom.' },
      { name: 'Noah', rating: 4, comment: 'Stylish and functional.' },
      {
        name: 'Olivia',
        rating: 4,
        comment: 'Highly recommended for bedrooms.',
      },
    ],
    tags: ['lamp', 'night', 'bedroom', 'ambient lighting', 'modern'],
    id: 5,
  },
  {
    name: 'Muggo',
    details: 'Small mug',
    price: 150,
    discount: 0,
    isNew: true,
    image: `http://localhost:${PORT}/api/images/muggo-img.png`,
    information:
      'A charming small mug that’s perfect for your morning coffee or tea. Its simple design makes it a versatile addition to any kitchen.',
    description:
      'The Muggo small mug is a delightful addition to your kitchenware. Its compact size is perfect for a quick coffee or tea, and its minimalist design fits any kitchen style.\n\nMade with high-quality materials, this mug is both durable and stylish. Whether for everyday use or special occasions, it’s a must-have for any kitchen.',
    reviews: [
      {
        name: 'Paul',
        rating: 5,
        comment: 'Perfect size for my morning coffee.',
      },
      { name: 'Quincy', rating: 4, comment: 'Simple and elegant design.' },
      { name: 'Rachel', rating: 4, comment: 'Great quality for the price.' },
    ],
    tags: ['mug', 'kitchenware', 'coffee', 'tea', 'minimalist'],
    id: 6,
  },
  {
    name: 'Pingky',
    details: 'Cute bed set',
    price: 7000000,
    discount: 50,
    isNew: false,
    image: `http://localhost:${PORT}/api/images/pingky-img.png`,
    information:
      'A cute and comfortable bed set that adds a playful touch to any bedroom. Perfect for kids or those young at heart.',
    description:
      'The Pingky bed set is designed with comfort and style in mind. Its playful design makes it a fun addition to any bedroom, especially for children.\n\nMade from high-quality materials, this bed set ensures durability and comfort. Its cute design is sure to bring a smile to your face every time you enter the room.',
    reviews: [
      { name: 'Sam', rating: 5, comment: 'My kids love it!' },
      { name: 'Tina', rating: 4, comment: 'Very comfortable and cute.' },
      { name: 'Uma', rating: 4, comment: 'Great quality and design.' },
    ],
    tags: ['bed set', 'cute', 'kids', 'playful', 'comfortable'],
    id: 7,
  },
  {
    name: 'Potty',
    details: 'Minimalist flower pot',
    price: 500000,
    discount: 0,
    isNew: true,
    image: `http://localhost:${PORT}/api/images/potty-img.png`,
    information:
      'A minimalist flower pot that complements any indoor or outdoor space. Perfect for adding a touch of greenery to your home.',
    description:
      'The Potty flower pot is designed to blend seamlessly with any decor. Its minimalist design makes it a versatile choice for both indoor and outdoor use.\n\nMade with durable materials, this pot ensures longevity and style. Whether you’re planting flowers or herbs, it adds a touch of elegance to any space.',
    reviews: [
      { name: 'Victor', rating: 5, comment: 'Perfect for my plants!' },
      { name: 'Wendy', rating: 4, comment: 'Simple and elegant.' },
      {
        name: 'Xander',
        rating: 4,
        comment: 'Great for indoor and outdoor use.',
      },
    ],
    tags: ['flower pot', 'minimalist', 'indoor', 'outdoor', 'decor'],
    id: 8,
  },
]

// @desc   Get all products
// @route  GET /api/products
export const getProducts = (req, res, next) => {
  const { limit = products.length, tag, page = 1 } = req.query

  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  const paginationProducts = products.slice(startIndex, endIndex)
  const totalPages = Math.ceil(products.length / limit)

  let filteredProducts = paginationProducts

  if (tag && tag != ' ') {
    const tagsArray = tag.split(',')
    filteredProducts = filteredProducts.filter((p) =>
      tagsArray.every((t) => p.tags.includes(t))
    )
  }

  res.status(200).json({ products: filteredProducts, totalPages: totalPages })
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
