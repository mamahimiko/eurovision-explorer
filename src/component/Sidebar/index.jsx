import { useState } from "react"
import { useNavigate } from "react-router";
import styles from "./sidebar.module.css"

import Hamburger from 'hamburger-react'
import { RxCross2 } from "react-icons/rx";


const Sidebar = ({ languages, onSelectLanguage }) => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState("")
    const showMobileMenu = () => {
        setMobileMenu(!mobileMenu)
    }

    const selectLanguage = (lang) => {
        setSelectedLanguage(lang)
        onSelectLanguage(lang)
    }

    const navigate = useNavigate()


    return (
        <nav className={styles.sidebar}>
            <div className={styles.hamburgermenu_container}>
                <Hamburger toggled={mobileMenu} toggle={setMobileMenu} className={styles.hambuger_icon} />
            </div>
            <div className={`${styles.menu} ${mobileMenu ? styles.active : " "}`}>
                <div className={styles.close_button}>
                    <RxCross2 onClick={showMobileMenu} />
                </div>
                <h3>Europa Languages</h3>
                <ul>{languages && languages.map((lang, index) => (
                    <li key={index} onClick={() => navigate(`/languages?lang=${lang}`)}>
                        {lang.charAt(0).toUpperCase() + lang.slice(1)}
                    </li>
                ))}
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar