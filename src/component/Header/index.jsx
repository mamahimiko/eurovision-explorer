import styles from "./header.module.css"
import headerLogo from "../../assets/images/header-logo.png"
import Navigation from "../Navigation"

const Header = () => {
    return (

        <header className={styles.header}>
            <div className={styles.header_logo}>
                <img src={headerLogo} className={styles.logoImage} />
            </div>
            <Navigation />
        </header>

    )
}

export default Header
