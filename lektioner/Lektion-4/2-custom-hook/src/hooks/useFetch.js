import { useEffect, useState, useRef } from 'react'

export const useFetch = (url) => {

    
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // const _config = useRef(config)
    
    useEffect(() => {
        
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(url)    
                console.log(res)
                if(!res.ok)
                    throw new Error(res.status, res.statusText)

                    const _data = await res.json()
                    setLoading(false)
                    setData(_data)
                    setError(null)
            } 
            catch (err) {
                setError('Can\'t fetch the data')
                console.log(err.message)
                setLoading(false)
            }
        }
        fetchData()

    // }, [_config.url])
    }, [url])


    return {data, loading, error}
}

// useEffect{() => {

// }}