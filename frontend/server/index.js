export const getProducts = async () => {
  try {
    const response = await fetch('http://localhost:1099/api/products', {
      method: 'GET',
    })

    if (response.ok) {
      const data = await response.json()
      return data
    } else {
      throw new Error('Error fetching data')
    }
  } catch (error) {
    throw new Error('Error fetching data')
  }
}

export const getFilteredProducts = async (limit, tags) => {
  tags = tags.reduce((final, cur) => final + cur + ',', '').slice(0, -1)
  const url = `http://localhost:1099/api/products?tag=${tags}&limit=${limit}`

  try {
    const response = await fetch(url, {
      method: 'GET',
    })

    if (response.ok) {
      const data = await response.json()
      return data
    } else {
      throw new Error('Error fetching data')
    }
  } catch (error) {
    throw new Error('Error fetching data')
  }
}

export const getProduct = async (id) => {
  try {
    const response = await fetch(`http://localhost:1099/api/products/${id}`, {
      method: 'GET',
    })

    if (response.ok) {
      const data = await response.json()
      return data
    } else {
      throw new Error('Error fetching data')
    }
  } catch (error) {
    throw new Error('Error fetching data')
  }
}
