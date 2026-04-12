import { useState, useEffect } from "react"
import useFetch from "../../component/Hooks/useFetchForLanguage"
import { useParams, useSearchParams, useOutletContext } from "react-router"
import Youtube from "react-youtube"
import styles from "./songPage.module.css"


const SongPage = () => {
    const { id, year } = useParams()
    const [searchParams] = useSearchParams();
    const selectedLanguage = searchParams.get("lang")
    const songInfo = useFetch(`${year}/contestants/${id}`)


    if (!songInfo) return <p>Loading...</p>

    const videoID = songInfo.videoUrls[0].split("/").pop()

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 0,
        },
    };

    const languages = songInfo.lyrics[0].languages?.[0]
    const languageUpperCase = languages.charAt(0).toUpperCase() + languages.slice(1)


    return (
        <div>
            <div className={styles.songPageContainer}>
                <div className={styles.videoWrapper}>
                    <Youtube videoId={videoID} opts={opts} />
                </div>
                <div className={styles.infoWrapper}>
                    <h2 className={styles.artist}>{songInfo.song}</h2>
                    <h3 className={styles.title}>{songInfo.artist}</h3>
                    <p>language: {languageUpperCase}</p>
                    <div className={styles.lyrics}>
                        <p>{songInfo.lyrics[0].content}</p>
                    </div>
                </div>
            </div>
        </div>
    )



}

export default SongPage