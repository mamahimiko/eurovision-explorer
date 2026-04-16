import styles from "./home.module.css"
import { Link } from "react-router";
import { threeYears } from "../../data/data";

const Home = () => {

    const reversedYears = [...threeYears].reverse();
    console.log(reversedYears.length - 1)


    return (
        <div className={styles.homeContainer}>
            <section className={styles.heroSection}>
                <div className={styles.overlay}></div>

                <div className={styles.heroContent}>
                    <h1 className={styles.mainTitle}>United by Music, Connected by Words.</h1>
                    <p className={styles.subTitle}>
                        Explore the World through Eurovision Hits, Learn Languages through their Lyrics.
                    </p>

                    <div className={styles.buttonGroup}>
                        <Link to={"/map"}><button className={`${styles.btn} ${styles.btnPrimary}`}>Explore by Map</button></Link>
                        <Link to={"/languages"}><button className={`${styles.btn} ${styles.btnSecondary}`}>Select by Language</button></Link>
                    </div>
                </div>
            </section>

            <section className={styles.aboutSection}>
                <div className={styles.aboutContent}>
                    <h2 className={styles.aboutTitle}>Eurovision Language Map</h2>
                    <p className={styles.description}>
                        The Eurovision Song Contest is more than just a competition; it is a vibrant "Sonic Map" where the diverse cultures and languages of the entire continent collide.
                    </p>

                    <div className={styles.features}>
                        <div className={styles.featureItem}>
                            <h3>Listen</h3>
                            <p>Experience the high-energy performances from the Grand Final in
                                {reversedYears.map((year, index) => (
                                    <span>
                                        {(reversedYears.length - 1 === index) ? ` and ${year}` : ` ${year},`}
                                    </span>
                                ))}.
                            </p>
                        </div>
                        <div className={styles.featureItem}>
                            <h3>Visualize</h3>
                            <p>Follow the pins across the map to discover the stories behind each nation's entry.</p>
                        </div>
                        <div className={styles.featureItem}>
                            <h3>Learn</h3>
                            <p>Use our unique lyrics panel to dive deep into the rhythm, meaning, and soul of native languages.</p>
                        </div>
                    </div>

                    <p className={styles.closing}>
                        One microphone, one map. Join us on a journey to find the language that earns your "12 Points."
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Home