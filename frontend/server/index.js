export const getProducts = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
    })

    if (response.ok) {
      const data = await response.json()
      return data
    } else {
      const error = await response.text()
      throw new Error(`Server error: ${error.message}`)
    }
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`)
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
