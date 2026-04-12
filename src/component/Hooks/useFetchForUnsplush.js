import { useState, useEffect } from "react"

const useFetchForUnsplush = (country) => {
    const [data, setData] = useState(null)
    const accessKey = import.meta.env.VITE_API_ACCESS_KEY_UNSPLUSH
    const API_ENDPOINT_UNSPLUSH = `https://api.unsplash.com/search/photos?page=1&query=${country}%20travel&client_id=${accessKey}`




        const getData = async () => {
            const cashKey = `background-image-${country}`
            const hadData = localStorage.getItem(cashKey)
            if(hadData) {
                setData(JSON.parse(hadData));
                return;
            }
    
            try {
                const response = await fetch(API_ENDPOINT_UNSPLUSH)
                const imageData = await response.json()

                const backgroundImageData = imageData.results[0].urls.full
                localStorage.setItem(cashKey, JSON.stringify(backgroundImageData))
                setData(backgroundImageData)
                
            } catch (error) {
                console.log(error)
            }
        }
        useEffect(() => {
            getData()
        }, [country])

    return data
}

export default useFetchForUnsplush