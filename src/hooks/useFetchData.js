import { useEffect, useState } from 'react'

export default function useFetchData(apiUrl, dataType) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            setError(null)
            setData(null)
            setIsLoading(true)
            try {
                const response = await fetch(apiUrl)
                return await response.json()
            } catch (e) {
                console.error(`Fetch ${dataType} failed: \n${e}`)
                setError(e)
                setData(null)
            }
        }
        fetchData()
            .then(setData)
            .then(() => setIsLoading(false))
            .catch(setError)
    }, [apiUrl, dataType])

    return {
        data,
        error,
        isLoading,
    }
}
