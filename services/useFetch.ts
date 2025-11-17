import { useEffect, useState } from "react"

useFetch(fetchMovies)

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    const fetchData = async() => {
        setLoading(true)
        try {
            setError(null)

            const result= await fetchFunction()

            setData(result)
        } catch (error) {
            //@ts-ignore
            setError(error instanceof Error ? error: new Error("An error occurred"))

        } finally {
            setLoading(false)
        }

    }
    const reset = () => {
        setData(null)
        setLoading(false)
        setError(null)
    }

    useEffect(() => {
        if (autoFetch){
            fetchData()
        }
    }, [])

    return { data, loading, error, refetch: fetchData, reset}
}

export default useFetch