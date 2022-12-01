
import styles from '../styles/NavBar.module.css'
import Link from 'next/link'
export default function NavBar () {
    return (
        <div className={styles.container}>
             <Link href="#home" scroll={false} className={styles.link}>
                <p className={styles.navTitle}>Home</p>
            </Link>
            <Link href="#about" scroll={false} className={styles.link}>
                <p className={styles.navTitle}>About</p>
            </Link>
            <Link href="#project" scroll={false} className={styles.link}>
                <p className={styles.navTitle} >Project</p>
            </Link> <Link href="#contact" scroll={false} className={styles.link}>
                <p className={styles.navTitle}>Contact</p>
            </Link>
        </div>
    )
}