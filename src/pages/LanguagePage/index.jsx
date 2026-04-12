import { useState, useEffect } from "react"
import { Outlet, useMatch, useSearchParams } from "react-router"
import styles from "./languagePage.module.css"
import useFetch from "../../component/Hooks/useFetchForLanguage"
import SongCard from "../../component/SongCard"
import Sidebar from "../../component/Sidebar"
import { threeYears } from "../../data/data";



const LanguagePage = () => {
    const isParentPage = useMatch('/languages') ? true : false;
    const isSongPage = useMatch('/languages/:year/:id') ? true : false;
    const results = useFetch(threeYears)


    const [searchParams] = useSearchParams()
    const selectedLanguage = searchParams.get("lang")


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


    const languagesMenu = songs?.contestants
        ? [...new Set(songs.contestants
            .map(c => c.lyrics[0].languages[0])
            .filter(l => l)
        )].sort()
        : [];


    if (!songs) {
        return <p>Loading Eurovision songs...</p>
    }


    return (

        <div className={styles.LanguagePage}>
            <div>
                <Sidebar languages={languagesMenu} />
            </div>

            {isSongPage ? (
                <Outlet context={{ selectedLanguage }} />
            ) : selectedLanguage ? (
                <div>
                    <h2 className={styles.title}>
                        {selectedLanguage ? selectedLanguage.toUpperCase() : ""}
                    </h2>
                    <div className={styles.contents}>
                        {isParentPage ? (songs.contestants
                            ?.filter((item) =>
                                !selectedLanguage ||
                                item.lyrics[0].languages[0] === selectedLanguage
                            )
                            .map((item, index) => (
                                <SongCard key={index} {...item} />
                            ))
                        ) : (
                            <Outlet context={{ selectedLanguage }} />
                        )
                        }
                    </div>
                </div>
            ) : (
                <div className={styles.initialState}>
                    <div className={styles.textCard}>
                        <h2>Discover music from a Language</h2>
                        <p>
                            Choose a language from the sidebar to explore Eurovision songs
                            and discover how music connects across cultures.
                        </p>
                    </div>
                </div>
            )}
        </div>

    )
}

export default LanguagePage
