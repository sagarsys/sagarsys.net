import { useEffect, useState } from 'react'

interface UseFetchDataReturn<T> {
  data: T | null
  error: Error | null
  isLoading: boolean
}

export default function useFetchData<T = unknown>(
  apiUrl: string,
  dataType: string
): UseFetchDataReturn<T> {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setError(null)
      setData(null)
      setIsLoading(true)
      try {
        const response = await fetch(apiUrl)
        const jsonData = await response.json()
        return jsonData as T
      } catch (e) {
        const error = e instanceof Error ? e : new Error(String(e))
        console.error(`Fetch ${dataType} failed: \n${error}`)
        setError(error)
        setData(null)
        throw error
      }
    }
    fetchData()
      .then(setData)
      .then(() => setIsLoading(false))
      .catch((e) => {
        const error = e instanceof Error ? e : new Error(String(e))
        setError(error)
        setIsLoading(false)
      })
  }, [apiUrl, dataType])

  return {
    data,
    error,
    isLoading,
  }
}


