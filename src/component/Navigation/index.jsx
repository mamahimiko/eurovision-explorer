import { useState } from "react"
import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css"
import { navigationMenu } from "../../data/data";
import { IoHome, IoMap, IoLanguage, IoPin } from "react-icons/io5";



const Navigation = () => {

    return (
        <nav className={styles.navigation}>
            <div className={styles.menu}>
                <ul>
                    {navigationMenu && navigationMenu.map((menu, index) => {
                        const Icon = menu.icon;
                        return (
                            <li key={index}>
                                <NavLink to={menu.root}>
                                    <p className={styles.icon}>
                                        <Icon className={styles.icon} />
                                    </p>
                                    {menu.name}
                                </NavLink>
                            </li>
                        )
                    }
                    )}
                </ul>
            </div>
        </nav>
    )
}

export default Navigation
