import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import styles from "./map.module.css"
import { eurovisionFinalists } from '../../data/countryInfo'

const Map = ({ selectCountry }) => {
    const position = [54.9000, 25.3167];
    const zoom = 5;
    return (
        <div className={styles.leafletContainer}>
            <MapContainer center={position} zoom={zoom}
                style={{ height: "100%", width: "100%" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {eurovisionFinalists.map((country, index) =>
                    <Marker position={[country.latitude, country.longitude]}
                        key={index}
                        eventHandlers={{
                            click: () => {
                                selectCountry(country);
                            }
                        }}>
                        <Popup>
                            <p className={styles.popup}>Here is {country.country}!</p>
                            <p className={styles.popup}>{country.hello}!</p>
                        </Popup>
                    </Marker>
                )}

            </MapContainer>
        </div>
    )
}

export default Map
