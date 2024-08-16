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
