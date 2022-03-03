import Link from 'next/link';
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/index.module.css'


function Home() {
    return (
        <div className={styles.homeContainer} >
            <div className={styles.headerContainer}>
                <h1 className={utilStyles.homeTitle}>Hi, I am <Link href="/about"><a id={styles.about}>Luciana</a></Link> </h1>
                <p className={utilStyles.subTitle}>UX designer based in Berlin </p>
                <Link href="/portfolio">
                    <button className={styles.button}> SEE PORTFOLIO </button>
                </Link>
            </div>
        </div>
    )
}

export default Home;
