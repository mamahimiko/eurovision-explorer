import styles from './countriesInfomation.module.css'
import useFetchForUnsplush from '../Hooks/useFetchForUnsplush'
import useFetch from "../Hooks/useFetchForLanguage"
import SongCard from "../SongCard"
import { countryCodes } from '../../data/countryCodes'
import { threeYears } from "../../data/data";


const CountriesInfomation = ({ countryInfo }) => {
    const imageUrl = useFetchForUnsplush(countryInfo.country)
    const results = useFetch(threeYears)

    const cssProperties = {
        '--image-url': `url(${imageUrl})`
    }


    let allContestants = []
    results?.forEach((yearData, index) => {
        if (yearData && yearData.contestants) {
            const year = threeYears[index]
            yearData.contestants.forEach((contestants) => {
                allContestants.push({ ...contestants, year });
            })
        }
    })

    const songs = { contestants: allContestants }

    return (
        <>
            {countryInfo ?
                <div style={cssProperties} className={styles.infoSection}>
                    <div className={styles.infoContainer}>
                        <h2 className={styles.countryName}>{countryInfo.country.toUpperCase()}</h2>

                        <div className={styles.textCard}>
                            <div className={styles.metaRow}>
                                <span>Language:{countryInfo.language}</span>
                                <span>Greeting: {countryInfo.hello}</span>
                                <span>City: {countryInfo.capital}</span>
                            </div>
                            <p>{countryInfo.tourism}</p>
                            <h3>Tourist Attraction</h3>
                            <ul>
                                {countryInfo.spots.map((spot, index) => <li key={index}>{spot}</li>)}
                            </ul>
                        </div>
                    </div>
                    <div className={styles.songList}>
                        <h3 className={styles.eurovisionTitle}>EURO VISION Songs</h3>
                        <div className={styles.cardContainer}>
                            {songs.contestants
                                ?.filter((item) => {
                                    const countryNameFromCode = countryCodes[item.country];
                                    return countryNameFromCode?.toLowerCase() === countryInfo.country?.toLowerCase()
                                })
                                .map((item, index) => (
                                    <SongCard key={index} {...item} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                :
                <div className={styles.hero}>
                    <div className={styles.textCard}>
                        <h1>Discover Europe Through Music</h1>
                        <p>
                            Explore countries across Europe by clicking pins on the map.
                            Learn about each country’s language and culture, and discover
                            songs performed at the Eurovision Song Contest.
                        </p>
                    </div>
                </div>
            }

        </>
    )
}

export default CountriesInfomation