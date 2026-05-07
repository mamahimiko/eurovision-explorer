import { useState, useEffect } from "react"

const useFetch = (endPoints = []) => {
    const [data, setData] = useState(null)

    const getData = async () => {

        const isSingle = typeof endPoints === 'string';
        const pointsArray = isSingle ? [endPoints] : endPoints;
        const mainCacheKey = `eurovision${endPoints}`;
        const hadData = localStorage.getItem(mainCacheKey)

        if(hadData && !isSingle) {
            setData(JSON.parse(hadData));
            return;
        }

        try {
            const results = await Promise.all (
                pointsArray.map(async (endpoint) => {
                    const cacheKey = `eurovision${endpoint}`;
                    const cachedItem = localStorage.getItem(cacheKey)
                    if(cachedItem) {
                        return JSON.parse(cachedItem);
                    }
                    const API_ENDPOINT = `${import.meta.env.VITE_API_ENDPOINT}${endpoint}`
                    const response = await fetch(API_ENDPOINT)
                    const languageData = await response.json()

                    if (languageData.contestants) {
                        const detailPromises = languageData.contestants.map(c => 
                            fetch(c.url).then(res => res.json())
                        )
        
                        const detailedContestants = await Promise.all(detailPromises)
        
                        const result = {...languageData, 
                            contestants: detailedContestants
                        }

                        localStorage.setItem(cacheKey, JSON.stringify(result))
                        return result
                    } else {
                        localStorage.setItem(cacheKey, JSON.stringify(languageData))
                        return languageData
                    }
                })
            )
            setData(isSingle ? results[0] : results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (endPoints && (endPoints.length > 0)){
            getData()
        }
    }, [JSON.stringify(endPoints)])

    return data
}

export default useFetch