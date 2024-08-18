import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [isError, setIsError] = useState(false)
  const [isFetching, setIsFetching] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true)
      setIsError(false)

      try {
        const response = await fetch(url)

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }

        const data = await response.json()
        setData(data)
      } catch (error) {
        setIsError(true)
        console.error(error)
      } finally {
        setIsFetching(false)
      }
    }

    fetchData()
  }, [url])

  return { isError, isFetching, data }
}

export default useFetch
