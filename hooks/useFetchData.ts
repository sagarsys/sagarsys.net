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
        // Cancel previous request if still pending
        let cancelled = false
        const abortController = new AbortController()
        const signal = abortController.signal

        async function fetchData() {
            setError(null)
            setData(null)
            setIsLoading(true)

            try {
                const response = await fetch(apiUrl, { signal })

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }

                const jsonData = await response.json()

                if (!cancelled && !signal.aborted) {
                    setData(jsonData as T)
                    setIsLoading(false)
                }
            } catch (e) {
                // Ignore abort errors
                if (
                    signal.aborted ||
                    (e instanceof Error && e.name === 'AbortError')
                ) {
                    return
                }

                const error = e instanceof Error ? e : new Error(String(e))
                console.error(`Fetch ${dataType} failed: \n${error}`)

                if (!cancelled) {
                    setError(error)
                    setData(null)
                    setIsLoading(false)
                }
            }
        }

        fetchData()

        return () => {
            cancelled = true
            abortController.abort()
        }
    }, [apiUrl, dataType])

    return {
        data,
        error,
        isLoading,
    }
}
