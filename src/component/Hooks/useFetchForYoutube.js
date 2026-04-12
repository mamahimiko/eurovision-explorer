import { useState, useEffect } from "react"

const useFetchForYoutube = (artist, songName) => {
    const [data, setData] = useState(null)
    const API_KEY_YOUTUBE = import.meta.env.VITE_API_KEY_YOUTUBE


    useEffect(() => {
        const getData = async () => {
            if (!artist || !songName) return;
            
            const cacheKey = `thumbnail_${artist}_${songName}`
            const query = encodeURIComponent(`${artist} ${songName} Eurovision`)
            const API_ENDPOINT_YOUTUBE = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${query}&type=video&key=${API_KEY_YOUTUBE}`

            const hadData = localStorage.getItem(cacheKey)
            if(hadData) {
                setData(JSON.parse(hadData));
                return;
            }
    
            try {
                const response = await fetch(API_ENDPOINT_YOUTUBE)
                const artistData = await response.json()
                if (artistData.items && artistData.items.length > 0) {
                    const thumbnailData = artistData.items[0].snippet.thumbnails.medium.url
                    localStorage.setItem(cacheKey, JSON.stringify(thumbnailData))
                    setData(thumbnailData)
                }
                
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [artist, songName])

    return data
}

export default useFetchForYoutube