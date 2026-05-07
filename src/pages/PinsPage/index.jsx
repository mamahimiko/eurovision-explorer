import styles from "./pinsPage.module.css"
import SongCard from "../../component/SongCard"

const PinsPage = () => {
    const getCardInfo = localStorage.getItem("favSongs") ? JSON.parse(localStorage.getItem("favSongs")) : null
    console.log(getCardInfo)

    return (
        <div className={styles.pinsPage}>
            <h2 className={styles.title}>Here is your pins!</h2>
            <div className={styles.cardsContainer}>
                {getCardInfo && getCardInfo?.map((item, index) => (
                    <SongCard key={index} {...item} />
                ))}
                {(!getCardInfo || getCardInfo.length === 0) && (
                    <div>
                        <p>You have no favourite songs! Are you sure??</p>
                    </div>)
                }
            </div>
        </div>

    )
}

export default PinsPage
