import styles from "./pinsPage.module.css"
import SongCard from "../../component/SongCard"

const PinsPage = () => {
    const getCardInfo = JSON.parse(localStorage.getItem("favSongs"))


    return (
        <div className={styles.pinsPage}>
            <h2 className={styles.title}>Here is your pins!</h2>
            <div className={styles.cardsContainer}>
                {getCardInfo.map((item, index) => (
                    <SongCard key={index} {...item} />
                ))}
            </div>
        </div>

    )
}

export default PinsPage
