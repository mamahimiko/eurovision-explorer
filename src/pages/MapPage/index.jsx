import styles from './mappage.module.css'
import { useState } from 'react'
import { Outlet, useMatch, useSearchParams } from "react-router"
import Map from '../../component/Map'
import CountriesInfomation from '../../component/CountriesInfomation'

const MapPage = () => {
    const [selectedPin, setSelectedPin] = useState("")

    const [searchParams] = useSearchParams()
    const selectedLanguage = searchParams.get("lang")


    return (
        <div className={styles.mapPage}>
            <Map selectCountry={setSelectedPin} />
            <CountriesInfomation countryInfo={selectedPin} />
        </div>
    )
}

export default MapPage